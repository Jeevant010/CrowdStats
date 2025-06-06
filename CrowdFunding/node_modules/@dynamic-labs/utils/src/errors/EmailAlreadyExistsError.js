'use client'
import { DynamicError } from './DynamicError.js';

class EmailAlreadyExistsError extends DynamicError {
    constructor() {
        super('Email already exists');
    }
}

export { EmailAlreadyExistsError };
