'use client'
import { DynamicError } from './DynamicError.js';

class UserRejectedRequestError extends DynamicError {
    constructor() {
        super('User rejected request', 'user_rejected_request');
    }
}

export { UserRejectedRequestError };
