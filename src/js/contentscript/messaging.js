export default function() {
  const port = browser.runtime.connect({ name: 'contentscript' });

  setTimeout(() => {port.postMessage({what: 'getFilters'})}, 5000);

  port.onMessage.addListener(message => {
    if (message.what === 'filters') {
      for (const filter of message.filters) {
        if (document.querySelector(filter)) {
          return port.postMessage({ what: 'bannerRemoved' });
        }
      }
    }
    window.postMessage(
      {
        direction: 'adequa-topage',
        message,
      },
      '*'
    );
  });

  window.addEventListener('message', event => {
    if (event.source === window && event.data.direction && event.data.direction === 'adequa-tocontentscript') {
      port.postMessage(event.data.message);
    }
  });

  browser.runtime.onConnect.addListener(port => {
    if (port.name === 'contentscript') return;
    port.onMessage.addListener(message => {
      window.postMessage(
        {
          direction: 'adequa-topage',
          message,
        },
        '*',
      );
    });
  });

  document.addEventListener('setConsent', e => {
    port.postMessage({ what: 'setConsent', ...e.detail });
  });
}
