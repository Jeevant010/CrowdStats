'use client'
import { DynamicError } from './DynamicError.js';

class EmbeddedWalletException extends DynamicError {
    constructor(message) {
        super(message);
    }
}

export { EmbeddedWalletException };
