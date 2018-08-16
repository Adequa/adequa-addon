'use strict';

window.onload = function () {

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
  req.open('get', 'http://localhost:3000/api/whitelist-urls');
  req.send(null);

};

// µBlock.netWhitelist = µBlock.whitelistFromString('https://www.google.com/');
// µBlock.saveWhitelist();