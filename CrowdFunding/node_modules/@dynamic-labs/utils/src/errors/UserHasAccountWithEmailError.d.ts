import { DynamicError } from './DynamicError';
export declare class UserHasAccountWithEmailError extends DynamicError {
    error: string;
    constructor(error: string);
}
