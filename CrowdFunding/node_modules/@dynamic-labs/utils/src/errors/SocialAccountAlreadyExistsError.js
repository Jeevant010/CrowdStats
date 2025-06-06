'use client'
import { DynamicError } from './DynamicError.js';

class SocialAccountAlreadyExistsError extends DynamicError {
    constructor() {
        super('Social account already exists');
    }
}

export { SocialAccountAlreadyExistsError };
