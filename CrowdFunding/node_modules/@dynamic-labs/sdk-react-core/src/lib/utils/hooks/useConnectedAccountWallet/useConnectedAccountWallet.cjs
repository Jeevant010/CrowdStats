'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePromise = require('../usePromise/usePromise.cjs');

const useConnectedAccountWallet = (connector, secondaryWallets) => usePromise.usePromise(() => {
    if (!connector) {
        return;
    }
    return connector
        .getConnectedAccounts()
        .then((connectedAccounts) => secondaryWallets.find((secondaryWallet) => {
        var _a;
        return secondaryWallet.address.toLowerCase() ===
            ((_a = connectedAccounts[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    }));
}, { deps: [connector, secondaryWallets] });

exports.useConnectedAccountWallet = useConnectedAccountWallet;
