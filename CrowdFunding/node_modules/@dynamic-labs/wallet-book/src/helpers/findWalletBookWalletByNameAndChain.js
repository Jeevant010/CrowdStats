'use client'
const findWalletBookWalletByNameAndChain = (walletBook, walletName, chain) => {
    var _a;
    return Object.values((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).find((wallet) => { var _a, _b; return wallet.name === walletName && ((_b = (_a = wallet.injectedConfig) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.chain) === chain; });
};

export { findWalletBookWalletByNameAndChain };
