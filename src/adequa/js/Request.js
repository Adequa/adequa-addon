/* global Adequa */

'use strict';

class XMLRequest {
  static get(url, body = null) {
    return XMLRequest.ajax('get', url, body);
  }

  static post(url, body) {
    return XMLRequest.ajax('post', url, body);
  }

  static ajax(method, url, body = null) {
    return new Promise(function (resolve, reject) {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function () {
        if(this.readyState === XMLHttpRequest.DONE) {
          if(this.status === 200)
            resolve(this);
          else
            reject(this);
        }
      };
      req.open(method, url);
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      req.send(body);
    });
  }

  static encoreUrlParams(data) {
    return Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
  }
}

Adequa.request = XMLRequest;