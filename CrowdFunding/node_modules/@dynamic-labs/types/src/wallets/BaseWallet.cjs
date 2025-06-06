'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.BaseWallet = BaseWallet;
