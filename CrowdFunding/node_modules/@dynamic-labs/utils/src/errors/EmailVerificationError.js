'use client'
import { DynamicError } from './DynamicError.js';

class EmailVerificationError extends DynamicError {
    constructor(message, code) {
        super(message, code);
    }
}

export { EmailVerificationError };
