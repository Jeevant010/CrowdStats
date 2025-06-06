'use client'
import { DynamicError } from './DynamicError.js';

class UserRejectedTransactionError extends DynamicError {
    constructor() {
        super('user rejected transaction');
    }
}

export { UserRejectedTransactionError };
