'use client'
import { DynamicError } from './DynamicError.js';

class MissingEnvironmentIdError extends DynamicError {
    constructor() {
        super('You are missing the environmentId field in yours DynamicContextProvider settings prop');
    }
}

export { MissingEnvironmentIdError };
