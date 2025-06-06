'use client'
import { DynamicError } from './DynamicError.js';

/** Used when trying to get necessary data for verification OTPs */
class VerificationDataCollectionError extends DynamicError {
    constructor(message) {
        super('Failed to get verification data: ' + message);
    }
}

export { VerificationDataCollectionError };
