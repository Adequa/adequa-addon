let lbcPort = null;
let call_id = 0;
const callbackBuffer = {};

const eventHandler = function (msg, port) {
    if (msg.what === "response") {
        const data = msg.data;

        const promises = [];
        for (const ad of data.ads.reverse()) {
            promises.push(
                Adequa.db.adSources.exists("lbc_" + ad.list_id).then(exist => {
                    if (!exist) promises.push(Adequa.db.adSources.put({_id: "lbc_" + ad.list_id, ...ad}).catch(console.warn));
                })
            );
        }
        Promise.all(promises).then(() => {
            if (msg.call_id) {
                callbackBuffer[msg.call_id]();
                callbackBuffer[msg.call_id] = null;
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

        lbcPort = port;
    }
});


const poll = function (interest, callback) {
    // const search = new leboncoin.Search()
    //     .setPage(1)
    //     .setQuery(interest.name);
    const body = interest.request;
    if(!body) return;
    // if (interest.parameters.text)
    //     body.filters.keywords = {text: interest.parameters.text};
    // if (interest.parameters.lat && interest.parameters.lng && interest.parameters.radius) {
    //     body.filters.location.area = {
    //         "lat": parseFloat(interest.parameters.lat),
    //         "lng": parseFloat(interest.parameters.lng),
    //         "radius": parseFloat(interest.parameters.radius)
    //     }
    // }
    // if (interest.parameters.price) {
    //     const [min, max] = interest.parameters.price.split('-').map(n => parseFloat(n));
    //     body.filters.ranges.price = {min, max}
    // }
    // if (interest.parameters.rooms) {
    //     const [min, max] = interest.parameters.rooms.split('-').map(n => parseFloat(n));
    //     body.filters.ranges.rooms = {min, max}
    // }
    // if (interest.parameters.square) {
    //     const [min, max] = interest.parameters.square.split('-').map(n => parseFloat(n));
    //     body.filters.ranges.square = {min, max}
    // }
    //
    console.log(body)
    // .setRegion("ile_de_france")
    // .setDepartment("yvelines")
    // .setLocation([
    //     {"zipcode": "78100"},
    //     {"zipcode": "78000"},
    // ]);

    call_id = call_id + 1;
    callbackBuffer[call_id] = callback || function () {
    };

    lbcPort.postMessage({what: "query", call_id, body});
};

const generateAds = function (number, callback) {
    Adequa.db.adSources.query(function (doc, emit) {
        if (!doc.already_transformed && doc._id.startsWith("lbc_"))
            emit(doc.index_date);
    }, {include_docs: true, limit: number}).then(function (data) {
        for (const {doc} of data.rows) {
            Promise.all([
                Adequa.db.ads.post({
                    title: doc.subject,
                    image: doc.images.thumb_url,
                    text: doc.category_name + "\n" + doc.location.city_label,
                    link: doc.url,
                    price: ((doc.price || []).length ? doc.price[0] : doc.price || 0) + "€",
                    generated_at: Date.now()
                }),
                Adequa.db.adSources.put({
                    _id: doc._id,
                    _rev: doc._rev,
                    already_transformed: true
                })
            ]).then(callback)
        }
    }).catch(console.warn);
};

const parseQuery = function (query) {
    const lbc_entry = Object.assign({}, Adequa.storage.leboncoinQueries["common"], Adequa.storage.leboncoinQueries[query.category]);
    const output = {parameters: {}};

    if (lbc_entry) {
        const lbcQueryParameters = lbc_entry.query_parameters;

        for (const index in lbcQueryParameters) {
            const param = query[index];
            const lbcParam = lbcQueryParameters[index];
            if (param) {
                output.parameters[lbcParam.name] = lbcParam.keys[param];
            }
        }
    }

    return output;
};

const renderQuery = function (interest) {
    const lbc_entry = Adequa.storage.leboncoinReversedQueries[interest.name];
    const output = {parameters: {}};

    if (lbc_entry) {
        output.name = lbc_entry.name;

        const lbcQueryParameters = lbc_entry.query_parameters;
        for (const index in interest.parameters) {
            const lbcParam = lbcQueryParameters[index];
            const param = interest.parameters[index];
            if (lbcParam) {
                output.parameters[lbcParam.name] = lbcParam.keys[param];
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

Adequa.test = function () {
    Adequa.db.adSources.query(function (doc, emit) {
        if (!doc.already_transformed && doc._id.startsWith("lbc_"))
            emit(doc.index_date);
    }, {include_docs: true}).then(function (result) {
        console.log(result)
    }).catch(function (err) {
        console.warn(err)
    });
};
