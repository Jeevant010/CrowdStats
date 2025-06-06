'use client'
import { DynamicError } from '@dynamic-labs/utils';
import { isTurnkeyEnabled } from '../../functions/isTurnkeyEnabled/isTurnkeyEnabled.js';
import { SECURE_ENCLAVE_PROVIDER_NOT_ENABLED } from '../../constants/errors.js';

const validateTurnkeyProviderEnabled = (projectSettings) => {
    const isTurnkeyProviderEnabled = isTurnkeyEnabled(projectSettings);
    if (!isTurnkeyProviderEnabled) {
        throw new DynamicError('No embedded wallet is enabled. Go to the dashboard and make sure to have both Embedded wallets and at least one EVM network enabled. Also, check if EthereumWalletConnectors is in the DynamicContextProvider > settings > walletConnectors.', SECURE_ENCLAVE_PROVIDER_NOT_ENABLED);
    }
    return isTurnkeyProviderEnabled;
};

export { validateTurnkeyProviderEnabled };
