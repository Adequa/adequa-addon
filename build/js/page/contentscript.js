function injectScript(file, onload) {
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);

    if(typeof onload === "function")
        s.onload = onload;

    document.head.appendChild(s);
}

const checkDocument = function(){
    if(document && document.head){
        injectScript(chrome.extension.getURL('/js/page/adequa-cmp.js'), function () {
            injectScript(chrome.extension.getURL('/js/page/start-cmp.js'));
        });
        return injectScript(chrome.extension.getURL('/js/page/adequa-api.bundle.js'));
    }

    setTimeout(checkDocument, 5)
};

checkDocument();
