'use client'
import { DynamicError } from './DynamicError.js';

class TooManyEmailVerificationsError extends DynamicError {
    constructor() {
        super('Too many email verification attempts.');
    }
}

export { TooManyEmailVerificationsError };
