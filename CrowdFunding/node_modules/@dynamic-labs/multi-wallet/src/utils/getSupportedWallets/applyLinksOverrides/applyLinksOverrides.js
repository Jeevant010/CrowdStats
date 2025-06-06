'use client'
import { findWalletBookWallet } from '@dynamic-labs/wallet-book';

const applyLinksOverrides = (walletBook, wallets) => wallets.map((wallet) => {
    const walletData = findWalletBookWallet(walletBook, wallet.key);
    if ((walletData === null || walletData === void 0 ? void 0 : walletData.switchNetworkOnlyFromWallet) !== undefined) {
        wallet.switchNetworkOnlyFromWallet =
            walletData.switchNetworkOnlyFromWallet;
    }
    return wallet;
});

export { applyLinksOverrides };
