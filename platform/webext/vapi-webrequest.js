/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2017-2018 Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

// For background page

'use strict';

/******************************************************************************/

vAPI.cookies = browser.cookies;
vAPI.firefox = true;

vAPI.net = {
    onBeforeRequest: {},
    onBeforeMaybeSpuriousCSPReport: {},
    onHeadersReceived: {},
    nativeCSPReportFiltering: true,
    webRequest: browser.webRequest,
    canFilterResponseBody:
        typeof browser.webRequest === 'object' &&
        typeof browser.webRequest.filterResponseData === 'function'
};

/******************************************************************************/

vAPI.net.registerListeners = function() {

    // https://github.com/gorhill/uBlock/issues/2950
    // Firefox 55 does not normalize URLs to ASCII, uBO must do this itself.
    // https://bugzilla.mozilla.org/show_bug.cgi?id=945240
    var mustPunycode = false;
    (function() {
        if (
            typeof browser === 'object' &&
            browser !== null &&
            browser.runtime instanceof Object &&
            typeof browser.runtime.getBrowserInfo === 'function'
        ) {
            browser.runtime.getBrowserInfo().then(info => {
                mustPunycode = info.name === 'Firefox' &&
                               /^5[0-6]\./.test(info.version);
            });
        }
    })();

    var wrApi = browser.webRequest;

    // legacy Chromium understands only these network request types.
    var validTypes = new Set([
        'image',
        'main_frame',
        'object',
        'other',
        'script',
        'stylesheet',
        'sub_frame',
        'xmlhttprequest',
    ]);
    // modern Chromium/WebExtensions: more types available.
    if ( wrApi.ResourceType ) {
        for ( let typeKey in wrApi.ResourceType ) {
            if ( wrApi.ResourceType.hasOwnProperty(typeKey) ) {
                validTypes.add(wrApi.ResourceType[typeKey]);
            }
        }
    }

    var denormalizeTypes = function(aa) {
        if ( aa.length === 0 ) {
            return Array.from(validTypes);
        }
        var out = new Set(),
            i = aa.length;
        while ( i-- ) {
            var type = aa[i];
            if ( validTypes.has(type) ) {
                out.add(type);
            }
            if ( type === 'image' && validTypes.has('imageset') ) {
                out.add('imageset');
            }
        }
        return Array.from(out);
    };

    var punycode = self.punycode;
    var reAsciiHostname  = /^https?:\/\/[0-9a-z_.:@-]+[/?#]/;
    var reNetworkURI = /^(?:ftps?|https?|wss?)/;
    var parsedURL = new URL('about:blank');

    var normalizeRequestDetails = function(details) {
        if (
            details.tabId === vAPI.noTabId &&
            reNetworkURI.test(details.documentUrl)
        ) {
            details.tabId = vAPI.anyTabId;
        }

        if ( mustPunycode && !reAsciiHostname.test(details.url) ) {
            parsedURL.href = details.url;
            details.url = details.url.replace(
                parsedURL.hostname,
                punycode.toASCII(parsedURL.hostname)
            );
        }

        var type = details.type;

        // https://github.com/gorhill/uBlock/issues/1493
        // Chromium 49+/WebExtensions support a new request type: `ping`,
        // which is fired as a result of using `navigator.sendBeacon`.
        if ( type === 'ping' ) {
            details.type = 'beacon';
            return;
        }

        if ( type === 'imageset' ) {
            details.type = 'image';
            return;
        }
    };

    function removeCookie(cookie) {
        var url = "http" + (cookie.secure ? "s" : "") + "://" + (cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain) +
            cookie.path;
        vAPI.cookies.remove({"url": url, "name": cookie.name});
    }

    var whitelist = {
        'lemonde.fr': [
            'prog-deploy',
            'user_session',
            'lmd_a_m',
            'lmd_a_s',
            'lmd_stay_connected',
            'tdb_user_id',
            'info_user_webs'
        ]
    };

    var onCookieChanged = function(changeInfo){
        if(changeInfo.removed)
            return;

        if(!(changeInfo.cookie.name && changeInfo.cookie.domain))
            return;

        var hostname = changeInfo.cookie.domain.split('.').slice(-2).join('.');
        if(!µBlock.isPartner(hostname))
            return;

        var hostnameWhitelist = (whitelist[hostname] || []);

        if(hostnameWhitelist.indexOf(changeInfo.cookie.name) === -1)
            removeCookie(changeInfo.cookie)
    };

    vAPI.cookies.onChanged.addListener(onCookieChanged);

    var onBeforeRequestClient = this.onBeforeRequest.callback;
    var onBeforeRequest = function(details) {
        normalizeRequestDetails(details);
        return onBeforeRequestClient(details);
    };

    if ( onBeforeRequest ) {
        let urls = this.onBeforeRequest.urls || ['<all_urls>'];
        let types = this.onBeforeRequest.types || undefined;
        if (
            (validTypes.has('websocket')) &&
            (types === undefined || types.indexOf('websocket') !== -1) &&
            (urls.indexOf('<all_urls>') === -1)
        ) {
            if ( urls.indexOf('ws://*/*') === -1 ) {
                urls.push('ws://*/*');
            }
            if ( urls.indexOf('wss://*/*') === -1 ) {
                urls.push('wss://*/*');
            }
        }
        wrApi.onBeforeRequest.addListener(
            onBeforeRequest,
            { urls: urls, types: types },
            this.onBeforeRequest.extra
        );
    }

    // https://github.com/gorhill/uBlock/issues/3140
    if ( typeof this.onBeforeMaybeSpuriousCSPReport.callback === 'function' ) {
        wrApi.onBeforeRequest.addListener(
            this.onBeforeMaybeSpuriousCSPReport.callback,
            {
                urls: [ 'http://*/*', 'https://*/*' ],
                types: [ 'csp_report' ]
            },
            [ 'blocking', 'requestBody' ]
        );
    }

    var onHeadersReceivedClient = this.onHeadersReceived.callback,
        onHeadersReceivedClientTypes = this.onHeadersReceived.types.slice(0),
        onHeadersReceivedTypes = denormalizeTypes(onHeadersReceivedClientTypes);
    var onHeadersReceived = function(details) {
        normalizeRequestDetails(details);
        if (
            onHeadersReceivedClientTypes.length !== 0 &&
            onHeadersReceivedClientTypes.indexOf(details.type) === -1
        ) {
            return;
        }
        return onHeadersReceivedClient(details);
    };

    if ( onHeadersReceived ) {
        let urls = this.onHeadersReceived.urls || ['<all_urls>'];
        let types = onHeadersReceivedTypes;
        wrApi.onHeadersReceived.addListener(
            onHeadersReceived,
            { urls: urls, types: types },
            this.onHeadersReceived.extra
        );
    }
};

/******************************************************************************/
