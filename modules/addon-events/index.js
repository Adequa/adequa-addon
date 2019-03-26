import { addMessageListener, eventHandler } from './src/subscribe';
import * as types from './src/event-types';

export default { addMessageListener, handler: eventHandler, types };
