function injectScript(file) {
    const th = document.getElementsByTagName("body")[0];
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

injectScript(chrome.extension.getURL('/js/page/cmp.js'));
