import Analytics from 'process/utils/analytics';
import Interests from 'process/interests';
import Emit from './emit';

const Tabs = {
  onUpdated(tabId, changeInfo) {
    if (changeInfo.url) {
      if (changeInfo.url.startsWith('http')) {
        Analytics.sendAnonymousEvent(changeInfo.url, 'basic', 'new_tab');
      }

      Interests.checkUrl(changeInfo.url);
    }
  },
  ...Emit,
};

export default Tabs;
