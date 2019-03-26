import Events from '../../modules/addon-events';
import CMP from '../../modules/addon-cmp';
import HelloWorld from '../../modules/addon-helloworld';

global.browser = require('webextension-polyfill');

browser.runtime.onMessage.addListener(Events.handler);

CMP.Background();
HelloWorld.Background();
