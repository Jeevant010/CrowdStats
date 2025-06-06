'use client'
import { isPasskeyWalletConnector, isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';

const findPasskeyEmailWalletConnector = (wallets, chain) => {
    const walletConnector = wallets
        .map(({ walletConnector }) => walletConnector)
        .find((walletConnector) => isPasskeyWalletConnector(walletConnector) &&
        isEmailWalletConnector(walletConnector) &&
        walletConnector.connectedChain === chain);
    return walletConnector;
};

export { findPasskeyEmailWalletConnector };
