/* global Adequa */

'use strict';

class ServerXMLRequest {
  static get(url, body = null) {
    return XMLRequest.ajax('get', url, body);
  }

  static put(url, body, json = false) {
    return XMLRequest.ajax('put', url, body, json);
  }

  static post(url, body, json = false) {
    return XMLRequest.ajax('post', url, body, json);
  }

  static ajax(method, url, body = null, json = false) {
    return new Promise(function(resolve, reject) {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) resolve(this);
          else reject(this);
        }
      };
      req.open(method, url);
      if (json) req.setRequestHeader('Content-type', 'application/json');
      else req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      req.setRequestHeader('Adequa-Token', Storage.addonToken);

      req.send(body);
    });
  }

  static encoreUrlParams(data) {
    return Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      })
      .join('&');
  }
}

Adequa.serverRequest = ServerXMLRequest;
