'use client'
import { isConnectorEventSupported } from '@dynamic-labs/wallet-connector-core';
import { getPlatformForConnector } from '../../../getPlatformForConnector/getPlatformForConnector.js';

/**
 * This function is a helper to filter out wallets that should not appear in the wallet list
 * if they are already linked to the user profile.
 */
const staticWalletFilter = (linkedWallets, walletOptions) => walletOptions.filter((walletOption) => {
    if (walletOption.walletConnector &&
        isConnectorEventSupported(walletOption.walletConnector, 'accountChanged', getPlatformForConnector(walletOption.walletConnector))) {
        return true;
    }
    if (linkedWallets.some((wallet) => wallet.connector.key === walletOption.key)) {
        return false;
    }
    return true;
});

export { staticWalletFilter };
