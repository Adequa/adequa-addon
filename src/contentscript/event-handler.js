import * as types from './event-types';
import { pageEmitter } from './event-emitter';

export default function eventHandler(message, sender, callback) {
  switch (message.type) {
    case types.OPEN_MODAL: {
      pageEmitter(types.OPEN_MODAL);
      break;
    }
    default: {
      console.log(`Event not handled : ${message.type}`);
    }
  }
}
