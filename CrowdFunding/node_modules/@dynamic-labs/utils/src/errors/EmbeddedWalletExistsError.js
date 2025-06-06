'use client'
import { DynamicError } from './DynamicError.js';

class EmbeddedWalletExistsError extends DynamicError {
    constructor(code) {
        super('EmbeddedWalletExistsError', code);
    }
}

export { EmbeddedWalletExistsError };
