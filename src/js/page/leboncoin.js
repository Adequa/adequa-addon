(function(){
    const port = chrome.runtime.connect({name: "leboncoin"});
    port.onMessage.addListener(function (message) {
        switch(message.what){
            case "query":
                fetch("https://api.leboncoin.fr/finder/search", {
                    "credentials": "omit",
                    "headers": {
                        "api_key": "ba0c2dad52b3ec",
                        "content-type": "text/plain;charset=UTF-8"
                    },
                    "referrer": "https://www.leboncoin.fr/",
                    "body": JSON.stringify(message.body),
                    "method": "POST",
                })
                    .then(res => res.json())
                    .then(data => {
                        port.postMessage({what: "response", call_id: message.call_id, data: data});
                    })
                    .catch(console.warn);
                return;
            default:
                console.log(message);
                return;
        }
    });
})();
