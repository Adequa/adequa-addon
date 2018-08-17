'use strict';

const requestWhitelist = function () {

  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if(this.readyState === XMLHttpRequest.DONE) {
      if(this.status === 200) {
        let whitelist = '';
        JSON.parse(this.responseText).forEach(function (url) {
          whitelist += url.url + '\n';
        });

        µBlock.netWhitelist = µBlock.whitelistFromString(whitelist);
        µBlock.saveWhitelist();
      }
    }
  };
  req.open('get', 'https://admin-equa.com/api/whitelist-urls');
  req.send(null);

};

window.onload = requestWhitelist;
window.destroyed = function () {
  clearInterval(timer);
};

const timer = setInterval(requestWhitelist, 24 * 60 * 60 * 1000); // Repead every day