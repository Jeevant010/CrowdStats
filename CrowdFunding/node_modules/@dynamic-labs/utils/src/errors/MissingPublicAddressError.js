'use client'
import { DynamicError } from './DynamicError.js';

class MissingPublicAddressError extends DynamicError {
    constructor() {
        super('Missing public address', 'missing-public-address');
    }
}

export { MissingPublicAddressError };
