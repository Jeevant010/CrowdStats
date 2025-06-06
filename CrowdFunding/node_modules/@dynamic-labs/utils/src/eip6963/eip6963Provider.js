'use client'
const isEip9693Event = (event) => event.type === 'eip6963:announceProvider' &&
    event.detail !== undefined;
const listenToEip6963Events = (handler) => {
    const eventHandler = (event) => {
        if (!isEip9693Event(event)) {
            return;
        }
        handler(event);
    };
    window.addEventListener('eip6963:announceProvider', eventHandler);
    return () => {
        window.removeEventListener('eip6963:announceProvider', eventHandler);
    };
};
class Eip6963Provider {
    constructor() {
        this.providers = [];
    }
    registerProviders() {
        if (typeof window === 'undefined') {
            return;
        }
        listenToEip6963Events((event) => {
            this.providers.push(event.detail);
        });
        window.dispatchEvent(new Event('eip6963:requestProvider'));
    }
}
class Eip6963ProviderSingleton {
    constructor() {
        this.eip6963Provider = new Eip6963Provider();
    }
    static get() {
        var _a;
        if (!((_a = Eip6963ProviderSingleton.instance) === null || _a === void 0 ? void 0 : _a.eip6963Provider)) {
            Eip6963ProviderSingleton.instance = new Eip6963ProviderSingleton();
            Eip6963ProviderSingleton.instance.eip6963Provider.registerProviders();
        }
        return Eip6963ProviderSingleton.instance.eip6963Provider;
    }
}

export { Eip6963Provider, Eip6963ProviderSingleton, isEip9693Event, listenToEip6963Events };
