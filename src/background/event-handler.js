import * as types from '../../modules/addon-events/src/event-types';

export default function eventHandler(event, sender, callback) {
  switch (event.type) {
    case types.OPEN_MODAL: {
      console.log('open modal');
      break;
    }
    case types.POPUP_OPENED: {
      console.log('popup opened');
      break;
    }
    case types.OPEN_WEBSITE: {
      browser.tabs.create({ url: event.url });
      break;
    }
    default:
      console.log(`Event type not handled : ${event.type}`);
  }
}
