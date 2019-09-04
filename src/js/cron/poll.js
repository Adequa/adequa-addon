import Sync from 'process/sync';

export default {
  setup() {
    Logger.debug('Resources poller is setup');
    Sync();

    setInterval(() => {
      Sync();
    }, 1000 * 60 * 30);
  },
};
