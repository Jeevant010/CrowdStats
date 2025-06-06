'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getWalletGroupType = (walletGroup) => {
    if (!walletGroup.groupedWallets.length) {
        throw new Error('Wallet group must have at least one wallet');
    }
    const [wallet] = walletGroup.groupedWallets;
    if (wallet.chainGroup) {
        return 'multi-chain';
    }
    if (wallet.walletGroup) {
        return 'multi-wallet';
    }
    return undefined;
};

exports.getWalletGroupType = getWalletGroupType;
