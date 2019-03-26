import store from '../../../../src/store';
import Utils from '../../../addon-utils';

export default {
  remove(cookie) {
    const url = `http${cookie.secure ? 's' : ''}://${cookie.domain.startsWith('.') ? cookie.domain.slice(1) : cookie.domain}${cookie.path}`;
    browser.cookies.remove({ url, name: cookie.name });
  },
  shouldDelete(url, tabId, initiator) {
    if (store?.state?.userBrokenWebsites?.indexOf(Utils.domain(initiator)) !== -1) return false;
    if (tabId === -1) return true;
    if (!store.state?.cookiePurposes) return false;
    const hostname = Utils.domain(url);
    const website = (store.state.tabs[tabId] || {}).hostname;
    if (website === hostname) return false;

    const purpose =
      ((store.state.cookiePurposes[website] || store.state.cookiePurposes.default)[hostname] || store.state.cookiePurposes.default[hostname] || {}).purpose || 'unknown';
    console.log(purpose);
    if (purpose === '1') return false;
    if (purpose === 'unknown') return false;
    if (purpose === 'deleted') return true;
    const allowedPurposes = Object.values(store.state.purposeList)
      .filter(p => p.allowed)
      .map(p => p.id);
    const purposesToDelete = Object.values(store.state.purposeList)
      .map(p => p.id)
      .filter(purposeId => allowedPurposes.indexOf(purposeId) === -1);
    console.log('allowed', allowedPurposes);
    console.log('todelete', purposesToDelete);
    return purposesToDelete.indexOf(parseInt(purpose, 10)) !== -1;
  },
};
