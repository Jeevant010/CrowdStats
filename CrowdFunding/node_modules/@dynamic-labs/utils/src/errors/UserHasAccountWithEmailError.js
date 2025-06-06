'use client'
import { DynamicError } from './DynamicError.js';

class UserHasAccountWithEmailError extends DynamicError {
    constructor(error) {
        super(error);
        this.error = error;
    }
}

export { UserHasAccountWithEmailError };
