'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class WalletBookSingleton {
    constructor(walletBook) {
        this.walletBook = walletBook;
    }
    static getOrCreate(walletBook) {
        var _a;
        if (!((_a = WalletBookSingleton.instance) === null || _a === void 0 ? void 0 : _a.walletBook)) {
            WalletBookSingleton.instance = new WalletBookSingleton(walletBook);
        }
        return WalletBookSingleton.instance;
    }
    static reset() {
        WalletBookSingleton.instance = undefined;
    }
}

exports.WalletBookSingleton = WalletBookSingleton;
