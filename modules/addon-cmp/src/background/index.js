import store from '../../../../src/store';
import * as types from '../../../../src/store/mutation-types';
import Resources from '../../../addon-resources';

import { registerEventHandlers } from './event-handler';

export default function Background() {
  registerEventHandlers();

  Resources.download('custom-css', types.SET_CUSTOMCSS);
  Resources.download('banner-filters', types.SET_BANNERFILTERS);
  Resources.download('cookies-default', types.SET_DEFAULTCOOKIEPURPOSES);

  store.commit(types.ADD_ALLOWEDAPICALL, 'purposeList');
}
