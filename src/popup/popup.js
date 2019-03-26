import Vue from 'vue';
import Vuex from 'vuex';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import store from '../store';
import App from './App';
import router from './router';

library.add(faQuestionCircle);
library.add(faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);
global.browser = require('webextension-polyfill');

Vue.prototype.$browser = global.browser;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
