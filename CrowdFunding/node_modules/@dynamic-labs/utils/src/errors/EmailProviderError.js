'use client'
import { DynamicError } from './DynamicError.js';

class EmailProviderError extends DynamicError {
    constructor(code) {
        super('EmailProviderError', code);
    }
}

export { EmailProviderError };
