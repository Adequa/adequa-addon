import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.SET_PURPOSE](state, payload) {
    state.purposeList[payload.id].allowed = payload.allowed;
  },
  [types.SET_PURPOSELIST](state, payload) {
    Vue.set(state, 'purposeList', payload);
  },
  [types.SET_TAB](state, payload) {
    Vue.set(state.tabs, payload.tabId, payload.tab);
  },
  [types.ADD_BROKENWEBSITE](state, payload) {
    if (state.userBrokenWebsites.indexOf(payload) === -1) state.userBrokenWebsites.push(payload);
  },
  [types.SET_CUSTOMCSS](state, payload) {
    Vue.set(state, 'customCss', payload);
  },
  [types.SET_BANNERFILTERS](state, payload) {
    Vue.set(state, 'bannerFilters', payload);
  },
  [types.SET_DEFAULTCOOKIEPURPOSES](state, payload) {
    Vue.set(state.cookiePurposes, 'default', payload);
  },
  [types.ADD_ALLOWEDAPICALL](state, payload) {
    if (state.allowedAPICall.indexOf(payload) === -1) state.allowedAPICall.push(payload);
  },
};
