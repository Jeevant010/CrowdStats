import { DynamicError } from './DynamicError';
export declare class SandboxMaximumThresholdReachedError extends DynamicError {
    errorMessage: string;
    constructor(errorMessage: string);
}
