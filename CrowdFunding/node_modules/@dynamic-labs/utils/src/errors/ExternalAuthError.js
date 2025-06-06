'use client'
import { DynamicError } from './DynamicError.js';

class ExternalAuthError extends DynamicError {
    constructor(code) {
        super('ExternalAuthError', code);
    }
}

export { ExternalAuthError };
