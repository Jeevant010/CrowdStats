'use client'
import { DynamicError } from '@dynamic-labs/utils';

const getEmbeddedWalletAuthHandler = (walletConnector) => {
    if (!walletConnector ||
        'getAuthenticatorHandler' in walletConnector === false) {
        throw new DynamicError('Invalid connector type');
    }
    const turnkeyAuthenticatorHandler = walletConnector.getAuthenticatorHandler();
    return turnkeyAuthenticatorHandler;
};

export { getEmbeddedWalletAuthHandler };
