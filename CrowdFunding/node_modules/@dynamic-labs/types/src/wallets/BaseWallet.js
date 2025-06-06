'use client'
class BaseWallet {
    constructor({ id, key, address, additionalAddresses = [], chain, isAuthenticated, }) {
        this.id = id;
        this.key = key;
        this.address = address;
        this.additionalAddresses = additionalAddresses;
        this.chain = chain;
        this.isAuthenticated = isAuthenticated;
    }
}

export { BaseWallet };
