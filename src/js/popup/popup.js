import Vue from 'vue';
import VueRouter from 'vue-router';
import ToggleButton from 'vue-js-toggle-button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCheck, faTrashAlt, faDownload, faArrowUp, faArrowLeft, faCog, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import browser from 'webextension-polyfill';
import Popup from './components/Popup';
import Cookies from './components/Cookies';
import Choices from './components/Choices';
import Interests from './components/Interests';
import Menu from './components/Menu';
import Stats from './components/Stats';

library.add(faQuestionCircle);
library.add(faTimes);
library.add(faCheck);
library.add(faTrashAlt);
library.add(faDownload);
library.add(faArrowUp);
library.add(faArrowLeft);
library.add(faCog);
library.add(faExclamationTriangle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(ToggleButton);
Vue.use(VueRouter);

global.browser = browser;

const routes = [
  {
    path: '/',
    component: Stats,
    props: true,
  },
  {
    path: '/menu',
    component: Menu,
    props: true,
  },
  {
    path: '/cookies',
    component: Cookies,
    props: true,
  },
  {
    path: '/choices',
    component: Choices,
    props: true,
  },
  {
    path: '/interests',
    component: Interests,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  render: h => h(Popup),
}).$mount('#app');
