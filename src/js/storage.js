const merge = require('deepmerge');

Adequa.storage = null;

Adequa.storage = {};

// function mergeDeep(...objects) {
//     const isObject = obj => obj && typeof obj === 'object';
//
//     return objects.reduce((prev, obj) => {
//         Object.keys(obj).forEach((key) => {
//             const pVal = prev[key];
//             const oVal = obj[key];
//
//             if (Array.isArray(pVal) && Array.isArray(oVal)) {
//                 prev[key] = pVal.concat(...oVal);
//             } else if (isObject(pVal) && isObject(oVal)) {
//                 prev[key] = mergeDeep(pVal, oVal);
//             } else {
//                 prev[key] = oVal;
//             }
//         });
//
//         return prev;
//     }, {});
// }

Adequa.setStorage = function (newCurrent) {
    if (Adequa.storage === null)
        return;

    const oldCurrent = Adequa.storage || {};
    const current = merge(oldCurrent, newCurrent);

    Adequa.storage = current;
    Adequa.shouldSetStorage = true;
    // Adequa.API.storage.set({current});
};

setInterval(() => {
    if (Adequa.shouldSetStorage)
        Adequa.API.storage.set({current: Adequa.storage});
    Adequa.shouldSetStorage = false;
}, 2000);
