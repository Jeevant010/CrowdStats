import { ErrorCode } from './ErrorCode';
/**
 * Extend this class to allow usage of instanceof
 */
export declare class CustomError extends Error {
    code: ErrorCode | string | undefined;
    constructor(message?: string, code?: ErrorCode | string);
    toJSON(): {
        code: string | ErrorCode | undefined;
        error: string;
    };
}
