'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Used to filter out wallets that are already connected
 * This is useful for connect-only multi-wallet, where we want users to only connect new wallets,
 * not additional accounts from the same wallet
 */
const filterConnectedWallets = ({ walletOptions, userWallets, }) => {
    const connectedWalletKeys = new Set(userWallets.map((connectedWallet) => connectedWallet.connector.key));
    /**
     * Phantom and Phantom Ledger are the same wallet, so we have to filter both of them
     * if one is present, because the next connection will not work, it will just connect the
     * same wallet again with a different walletName.
     * This will be fixed by combining both Phantom and PhantomLedger to the same connector here QNTM-885
     */
    if (connectedWalletKeys.has('phantom') ||
        connectedWalletKeys.has('phantomledger')) {
        connectedWalletKeys.add('phantom');
        connectedWalletKeys.add('phantomledger');
    }
    return walletOptions.filter((wallet) => !connectedWalletKeys.has(wallet.walletConnector.key));
};

exports.filterConnectedWallets = filterConnectedWallets;
