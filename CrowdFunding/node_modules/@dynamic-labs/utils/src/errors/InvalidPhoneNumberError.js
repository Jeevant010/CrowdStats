'use client'
import { DynamicError } from './DynamicError.js';

class InvalidPhoneNumberError extends DynamicError {
    constructor(error) {
        super(error !== null && error !== void 0 ? error : 'Invalid phone number.');
    }
}

export { InvalidPhoneNumberError };
