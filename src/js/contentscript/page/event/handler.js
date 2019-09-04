const Handler = {
  Emitter: {},
  execCallback: function(id, ...args) {
    if (typeof this.Emitter.callbacks[id] === 'function') {
      this.Emitter.callbacks[id](...args);
    }
    delete this.Emitter.callbacks[id];
  },
  handler: function(message) {
    switch (message.what) {
      case 'siteViews':
        this.execCallback(message.requestId, message.views);
        break;
      case 'consent':
        // document.dispatchEvent(new CustomEvent('consentUpdated', {detail: message.consent.consentString}));
        this.execCallback(message.requestId, message.consent);
        break;
      case 'dimensions':
        // document.dispatchEvent(new CustomEvent('consentUpdated', {detail: message.consent.consentString}));
        this.execCallback(message.requestId, message.dimensions);
        break;
      case 'interests':
        this.execCallback(message.requestId, message.interests);
        break;
      case 'vendorConsents':
        this.execCallback(message.requestId, message.vendorConsents, true);
        break;
      case 'consentData':
        this.execCallback(message.requestId, message.consentData, true);
        break;
      case 'settings':
        this.execCallback(message.requestId, message.settings);
        break;
      case 'openModal':
        window.AdequaCmp.showCookieSettings();
        break;
      default:
        if (message.requestId) this.execCallback(message.requestId);
    }
  },
  setup: function(Emitter) {
    this.Emitter = Emitter;
    window.addEventListener('message', event => {
      if (event.source === window && event.data.direction && event.data.direction === 'adequa-topage') {
        const message = event.data.message;
        if (!message) return;

        this.handler(message);
      }
    });
  },
};

export { Handler };
