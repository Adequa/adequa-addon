'use strict';

/* TODO stop overwrite actual whitelist and append Adequa's whitelist */

const ajax = function (method, url, body = null) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200)
          resolve(this);
        else
          reject(this);
      }
    };

    req.open(method, url);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send(body);
  });
};

const requestWhitelist = function () {

  ajax('get', 'https://admin-equa.com/api/whitelist-urls')
    .then(function (data) {
      let whitelist = '';
      JSON.parse(data.responseText).forEach(function (url) {
        whitelist += url.url + '\n';
      });

      µBlock.netWhitelist = µBlock.whitelistFromString(whitelist);
      µBlock.saveWhitelist();
    });

};

window.onload = requestWhitelist;
window.destroyed = function () {
  clearInterval(timer);
};

const timer = setInterval(requestWhitelist, 24 * 60 * 60 * 1000); // Repead every day