import { DynamicError } from './DynamicError';
export declare class TransactionGasCannotBeSponsoredError extends DynamicError {
    constructor();
    static message: string;
    static isInstance(err: {
        walk?: () => unknown;
    } | unknown): err is TransactionGasCannotBeSponsoredError;
    static isErrorMessage(err: unknown): boolean;
}
