'use client'
import { DynamicError } from './DynamicError.js';

class UsernameAlreadyExistsError extends DynamicError {
    constructor() {
        super('Username already exists');
    }
}

export { UsernameAlreadyExistsError };
