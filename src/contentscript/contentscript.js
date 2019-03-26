import CMP from '../../modules/addon-cmp';
import API from '../../modules/addon-api';
import HelloWorld from '../../modules/addon-helloworld';

import eventHandler from './event-handler';

const browser = require('webextension-polyfill');

browser.runtime.onMessage.addListener(eventHandler);

API.ContentScript();
CMP.ContentScript();
HelloWorld.ContentScript();
