const Emitter = {
  callbacks: {},
  nextId: 1,
  addCallback(callback) {
    const id = this.nextId;
    this.callbacks[this.nextId] = callback;
    this.nextId += 1;

    return id;
  },
  sendMessage(msg, callback) {
    if (typeof callback === 'function') msg.requestId = this.addCallback(callback);
    window.postMessage(
      {
        direction: 'adequa-tocontentscript',
        message: msg,
      },
      '*'
    );
  },
};

const Handler = {
  execCallback(id, ...args) {
    if (typeof Emitter.callbacks[id] === 'function') {
      Emitter.callbacks[id](...args);
    }
    delete Emitter.callbacks[id];
  },
  handler(message) {
    this.execCallback(message.requestId, message.data);
  },
  setup() {
    window.addEventListener('message', event => {
      if (event.source === window && event.data.direction && event.data.direction === 'adequa-topage') {
        const { message } = event.data;
        if (!message) return;

        this.handler(message);
      }
    });
  },
};

Handler.setup();

window.Adequa = {
  get(what, callback) {
    return new Promise(resolve => {
      Emitter.sendMessage({ what, type: 'API' }, data => {
        if (typeof callback === 'function') callback(data);
        resolve(data);
      });
    });
  },
};
