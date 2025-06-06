'use client'
import { DynamicError } from './DynamicError.js';

class WalletUsedError extends DynamicError {
    constructor(code) {
        super('WalletUsedError', code);
    }
}

export { WalletUsedError };
