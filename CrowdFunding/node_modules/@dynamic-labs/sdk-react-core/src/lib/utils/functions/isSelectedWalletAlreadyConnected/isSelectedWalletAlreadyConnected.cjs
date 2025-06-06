'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSelectedWalletAlreadyConnected = (linkedWallets, selectedWallet, user) => {
    if (!user)
        return false;
    return linkedWallets
        .map(({ connector }) => connector.key)
        .includes(selectedWallet.key);
};

exports.isSelectedWalletAlreadyConnected = isSelectedWalletAlreadyConnected;
