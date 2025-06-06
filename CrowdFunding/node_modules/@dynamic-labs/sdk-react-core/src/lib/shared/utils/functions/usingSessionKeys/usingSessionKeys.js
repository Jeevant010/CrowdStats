'use client'
import { isSessionKeyCompatibleWalletConnector, isAccountAbstractionConnector } from '@dynamic-labs/wallet-connector-core';

const usingSessionKey = (walletConnector) => isSessionKeyCompatibleWalletConnector(walletConnector) ||
    (isAccountAbstractionConnector(walletConnector) &&
        isSessionKeyCompatibleWalletConnector(walletConnector.getEOAConnector()));

export { usingSessionKey };
