export const pageEmitter = function backgroundEmitter(type, message = {}) {
  window.postMessage({ message: { ...message, type }, direction: 'adequa-topage' }, '*');
};
