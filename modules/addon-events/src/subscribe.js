const messageListeners = {};

export const eventHandler = function eventHandler(message, sender, callback) {
  console.log(message);
  if (!message.type) return false;

  const listeners = messageListeners[message.type] || [];
  console.log(listeners);
  if (!listeners.length) {
    console.log(`Event not handled : ${message.type}`);
    return false;
  }

  for (const listener of listeners) {
    listener(message, sender, callback);
  }

  return true;
};

export const addMessageListener = function addMessageListener(type, listener) {
  if (messageListeners && messageListeners[type] && Array.isArray(messageListeners[type])) {
    messageListeners[type].push(listener);
  } else {
    messageListeners[type] = [listener];
  }
};
