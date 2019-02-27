let lbcPort = null;
let call_id = 0;
const requestBuffer = {};

const eventHandler = function (msg, port) {
    if (msg.what === "response") {
        const data = msg.data;

        const promises = [];
        for (const ad of data.ads.reverse()) {
            promises.push(
                Adequa.db.adSources.exists("lbc_" + ad.list_id).then(exist => {
                    const data = {_id: "lbc_" + ad.list_id, ...ad};
                    if (msg.call_id) {
                        data.interest = requestBuffer[msg.call_id].interest.name
                    }
                    if (!exist) promises.push(Adequa.db.adSources.put(data).catch(console.warn));
                })
            );
        }
        Promise.all(promises).then(() => {
            if (msg.call_id) {
                requestBuffer[msg.call_id].callback();
                requestBuffer[msg.call_id] = null;
            }
        })
    } else if (msg.what === "stayNotified") {
        Adequa.actions.interests.checkInterest(msg.url, port.sender.tab.id);
        Adequa.actions.tabs.notify('Vous êtes parés', 'C\'est ici que vous verrez apparaitre les notifications !')
    } else {
        console.log(msg)
    }
};

Adequa.API.runtime.onConnect.addListener(function (port) {
    if (port.name === "leboncoin") {
        port.onMessage.addListener(function (msg) {
            eventHandler(msg, port);
        });

        if (!lbcPort) lbcPort = port;

        port.onDisconnect.addListener(function () {
            lbcPort = null;
        });
    }
});


const poll = function (interest, callback) {
    const body = interest.request;
    if (!body) return;

    call_id = call_id + 1;
    requestBuffer[call_id] = {
        callback: callback || function () {
        },
        interest
    };

    lbcPort.postMessage({what: "query", call_id, body});
};

const generateAds = function (number, callback) {
    Adequa.db.adSources.query(function (doc, emit) {
        if (!doc.already_transformed && doc._id.startsWith("lbc_"))
            emit(doc.index_date);
    }, {include_docs: true, limit: number}).then(function (data) {
        const promises = [];
        for (const {doc} of data.rows) {
            promises.push(Adequa.db.ads.post({
                title: doc.subject,
                image: doc.images.thumb_url,
                text: doc.category_name + "\n" + doc.location.city_label,
                link: doc.url,
                price: ((doc.price || []).length ? doc.price[0] : doc.price || 0) + "€",
                generated_at: Date.now(),
                interest: doc.interest
            }));
            promises.push(Adequa.db.adSources.put({
                _id: doc._id,
                _rev: doc._rev,
                already_transformed: true
            }));
        }
        Promise.all(promises).then(callback)
    }).catch(console.warn);
};

const parseQuery = function (query) {
    const lbc_entry = Adequa.storage.leboncoinQueries[query.category];
    lbc_entry.query_parameters = Object.assign({}, Adequa.storage.leboncoinQueries.common.query_parameters, lbc_entry.query_parameters);

    const output = {parameters: {}};

    if (lbc_entry) {
        // output.name = lbc_entry.name;

        const lbcQueryParameters = lbc_entry.query_parameters;

        for (const index in query) {
            const param = query[index];
            const lbcParam = lbcQueryParameters[index];

            if (lbcParam) {
                output.parameters[lbcParam.name] = (lbcParam.keys || {})[param] || param;
            }
        }
    }

    return output;
};


Adequa.catalogs["leboncoin"] = {
    category: "Immobilier",
    poll,
    generateAds,
    parseQuery
};
