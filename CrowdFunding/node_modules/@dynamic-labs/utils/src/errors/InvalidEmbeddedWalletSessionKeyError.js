'use client'
import { DynamicError } from './DynamicError.js';

class InvalidEmbeddedWalletSessionKeyError extends DynamicError {
    constructor(error) {
        super(error !== null && error !== void 0 ? error : 'Invalid embedded wallet session key.');
    }
}

export { InvalidEmbeddedWalletSessionKeyError };
