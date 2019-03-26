import page from './page';

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
      injectScript('https://adequa.me/cmp/default.js');
      return injectScript(page, true);
    }

    return setTimeout(checkDocument, 5);
  };

  checkDocument();
};
