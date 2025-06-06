'use client'
import { DynamicError } from './DynamicError.js';

class AccountExistsError extends DynamicError {
    constructor(errorMessage, errorPayload) {
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.errorPayload = errorPayload;
    }
}

export { AccountExistsError };
