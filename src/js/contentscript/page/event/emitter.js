const Emitter = {
  callbacks: {},
  nextId: 1,
  addCallback: function(callback) {
    const id = this.nextId;
    this.callbacks[this.nextId] = callback;
    this.nextId++;

    return id;
  },
  sendMessage: function(msg, callback) {
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

export { Emitter };
