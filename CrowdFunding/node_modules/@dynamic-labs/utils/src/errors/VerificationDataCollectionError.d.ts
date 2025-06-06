import { DynamicError } from './DynamicError';
/** Used when trying to get necessary data for verification OTPs */
export declare class VerificationDataCollectionError extends DynamicError {
    constructor(message: string);
}
