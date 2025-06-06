'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const metaMaskConnectorKey = 'metamask';
/**
 * Creates a filter for MetaMask Mobile wallets
 * If user has MetaMask Mobile wallet, filter out all other wallets
 * because MetaMask Mobile doesn't support multiwallet
 */
const createMetaMaskMobileFilter = (userWallets) => {
    if (!utils.isMobile()) {
        return () => true;
    }
    const hasMetaMaskWallet = userWallets.some((wallet) => wallet.key === metaMaskConnectorKey);
    if (!hasMetaMaskWallet) {
        return () => true;
    }
    return (walletOption) => walletOption.walletConnector.key !== metaMaskConnectorKey;
};

exports.createMetaMaskMobileFilter = createMetaMaskMobileFilter;
