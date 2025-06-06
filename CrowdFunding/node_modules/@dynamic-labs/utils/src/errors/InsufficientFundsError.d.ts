import { DynamicError } from './DynamicError';
export declare class InsufficientFundsError extends DynamicError {
    constructor();
    static message: string;
    static isInstance(err: {
        walk?: () => unknown;
    } | unknown): err is InsufficientFundsError;
    static isErrorMessage(err: unknown): boolean;
}
