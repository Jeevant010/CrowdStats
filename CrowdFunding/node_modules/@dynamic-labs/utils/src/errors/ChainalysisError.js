'use client'
import { DynamicError } from './DynamicError.js';

class ChainalysisError extends DynamicError {
    constructor(walletPublicKey) {
        super('This address is not approved for access');
        this.walletPublicKey = walletPublicKey;
    }
}

export { ChainalysisError };
