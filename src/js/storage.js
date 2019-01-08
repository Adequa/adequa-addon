const { mergeDeep } = require('immutable');

Adequa.storage = null;

const store = function(){
    Adequa.API.storage.set({storage: Adequa.storage});
};

Adequa.setStorage = function (newStorage) {
    if (Adequa.storage === null)
        return;

    const oldStorage = Adequa.storage || {};

    Adequa.storage = mergeDeep(oldStorage, newStorage);
    clearTimeout(Adequa.setStorageTimeout || 0);
    Adequa.setStorageTimeout = setTimeout(store, 2000);
};
