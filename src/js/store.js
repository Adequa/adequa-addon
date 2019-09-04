export default class Store {
    constructor() {
        return new Proxy(this, this);
    }

    store = {};

    storageTimeout = 0;

    persist() {
        browser.storage.local.set({ storage: this.store });
    }

    get(target, prop) {
        return this[prop] || this.store[prop];
    }

    set(_, key, value) {
        clearTimeout(this.storageTimeout);
        setTimeout(() => this.persist(), 2000);

        if (key === 'store') {
            this.store = value;
            return true;
        }
        this.store[key] = value;
        return true;
    }

    async loadPersisted() {
        const { storage } = await browser.storage.local.get('storage');
        this.store = storage || {};
    }
}
