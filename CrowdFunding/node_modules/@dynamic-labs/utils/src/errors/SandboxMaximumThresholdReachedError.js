'use client'
import { DynamicError } from './DynamicError.js';

class SandboxMaximumThresholdReachedError extends DynamicError {
    constructor(errorMessage) {
        super(errorMessage);
        this.errorMessage = errorMessage;
    }
}

export { SandboxMaximumThresholdReachedError };
