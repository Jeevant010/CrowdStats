'use client'
import { getWalletBookWallet } from './getWalletBookWallet.js';

const findWalletBookWallet = (walletBook, walletKey) => {
    try {
        const walletData = getWalletBookWallet(walletBook, walletKey);
        return walletData;
    }
    catch (err) {
        return undefined;
    }
};

export { findWalletBookWallet };
