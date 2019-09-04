import { Emitter } from './event/emitter';
import { Handler } from './event/handler';

export default function() {
  Handler.setup(Emitter);

  const Adequa = {
    getViews(callback) {
      Emitter.sendMessage({ what: 'getSiteViews' }, callback);
    },
    getConsent(callback) {
      Emitter.sendMessage({ what: 'getConsent' }, callback);
    },
    getDimensions(callback) {
      Emitter.sendMessage({ what: 'getDimensions' }, callback);
    },
    getInterests(callback) {
      Emitter.sendMessage({ what: 'getInterests' }, callback);
    },
  };

  window.Adequa = Adequa;
}
