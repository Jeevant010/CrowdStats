'use client'
import { CustomError } from './CustomError.js';
import { ErrorCode } from './ErrorCode.js';

/** Mapping of metamask error codes to dynamic [ErrorCode]s */
const metaMaskErrorMap = {
    4001: ErrorCode.USER_REJECTED,
};
class MetaMaskError extends CustomError {
    constructor(message, code) {
        super(message, code);
    }
    /**
     * Creates a [MetaMaskError] from an unknown error (thrown by MetaMask)
     *
     * @param error - The error to create the [MetaMaskError] from
     * @returns A new [MetaMaskError]
     */
    static fromError(error) {
        var _a, _b;
        if (error instanceof Object) {
            const errorObject = error;
            const dynamicErrorCode = (_b = metaMaskErrorMap[(_a = errorObject.code) !== null && _a !== void 0 ? _a : '']) !== null && _b !== void 0 ? _b : ErrorCode.DEFAULT;
            return new MetaMaskError(errorObject.message, dynamicErrorCode);
        }
        return new MetaMaskError(String(error), ErrorCode.DEFAULT);
    }
}

export { MetaMaskError, metaMaskErrorMap };
