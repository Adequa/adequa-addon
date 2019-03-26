import * as types from '../../modules/addon-events/src/event-types';

export function openModal() {
  browser.runtime.sendMessage({
    type: types.OPEN_MODAL,
  });
}

export function popupOpened() {
  browser.runtime.sendMessage({
    type: types.POPUP_OPENED,
  });
}

export function openWebsite(url) {
  browser.runtime.sendMessage({
    url,
    type: types.OPEN_WEBSITE,
  });
}
