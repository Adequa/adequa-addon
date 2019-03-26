export default {
  on(type, callback) {
    window.addEventListener('message', event => {
      if (event.source === window && event.data.direction && event.data.direction === 'adequa-topage') {
        const { message } = event.data;
        if (!message) return;
        if (message.type !== type) return;

        callback(message);
      }
    });
  },
};
