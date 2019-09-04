import browser from 'webextension-polyfill';
import Utils from 'process/utils/utils';
import Messaging from './messaging';

global.browser = browser;

Messaging();

function isOnPreview() {
  const url = window.location.href;
  return url.indexOf('publisher.adequa.me') !== -1;
}

function injectScript(file) {
  return new Promise(resolve => {
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    s.onload = resolve;

    document.head.appendChild(s);
  });
}

const checkHead = function checkDocument() {
  if (document && document.head) {
    injectScript(browser.extension.getURL('/contentscript/page.js'));
    return;
  }

  setTimeout(checkHead, 5);
};
checkHead();

const checkBody = function checkDocument() {
  if (document && document.body) {
    if (!document.head.querySelector('script[src^="https://adequa.me/cmp/"]') && !isOnPreview()) //`script[src^="${Adequa.uri}cmp/"]`
      injectScript(browser.extension.getURL(`https://adequa.me/cmp/${Utils.domain(window.location.href).replace('.', '')}.js`));
    return;
  }

  setTimeout(checkBody, 5);
};
checkBody();
