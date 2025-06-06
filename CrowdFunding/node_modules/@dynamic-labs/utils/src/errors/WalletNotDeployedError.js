'use client'
import { DynamicError } from './DynamicError.js';

class WalletNotDeployedError extends DynamicError {
    constructor() {
        super('Wallet has not been deployed', 'wallet_not_deployed');
    }
}

export { WalletNotDeployedError };
