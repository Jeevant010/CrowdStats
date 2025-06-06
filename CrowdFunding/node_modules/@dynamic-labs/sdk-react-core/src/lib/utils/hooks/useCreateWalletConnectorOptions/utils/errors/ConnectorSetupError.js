'use client'
import { DynamicError } from '@dynamic-labs/utils';

class ConnectorSetupError extends DynamicError {
    constructor(providerName, connectorName) {
        super(`${providerName} is enabled but ${connectorName} is not in your walletConnectors list. See https://docs.dynamic.xyz/react-sdk/wallet-connectors for more information.`);
    }
}

export { ConnectorSetupError };
