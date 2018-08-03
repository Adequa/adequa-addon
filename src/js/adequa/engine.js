/* global uDom */

'use strict';

let changeScreen = function (screen, onLoadCallback) {
  onLoadCallback = onLoadCallback || function () {};

  let iframe = uDom('iframe');

  iframe.on('load', function () {
    onLoadCallback(this.contentWindow.document);
    onLoadCallback = null;
  });

  iframe.attr('src', screen);

  return iframe.nodes[0].contentWindow.document;
};