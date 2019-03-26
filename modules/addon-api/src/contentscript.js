import store from '../../../src/store';
import page from '!raw-loader!./page';

export default () => {
  function injectScript(script, inline) {
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    if (inline) s.innerHTML = script;
    else s.src = script;

    document.head.appendChild(s);
  }

  const checkDocument = function checkDocument() {
    if (document && document.head) {
      return injectScript(page, true);
    }

    return setTimeout(checkDocument, 5);
  };

  checkDocument();

  window.addEventListener('message', event => {
    if (event.source === window && event.data.direction && event.data.direction === 'adequa-tocontentscript') {
      const { message } = event.data;
      if (!message) return;
      if (message.type !== 'API') return;
      if (store.state.allowedAPICall.indexOf(message.what) === -1) {
        window.postMessage(
          {
            message: { requestId: message.requestId, data: false },
            direction: 'adequa-topage',
          },
          '*'
        );
        return;
      }
      window.postMessage({ message: { requestId: message.requestId, data: store.state[message.what] }, direction: 'adequa-topage' }, '*');
    }
  });
};
