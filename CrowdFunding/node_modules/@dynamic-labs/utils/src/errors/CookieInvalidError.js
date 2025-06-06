'use client'
import { DynamicError } from './DynamicError.js';

class CookieInvalidError extends DynamicError {
    constructor() {
        super('The cookie is invalid or expired');
    }
}

export { CookieInvalidError };
