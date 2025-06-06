'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CustomError = require('./CustomError.cjs');
var ErrorCode = require('./ErrorCode.cjs');

/** Mapping of metamask error codes to dynamic [ErrorCode]s */
const metaMaskErrorMap = {
    4001: ErrorCode.ErrorCode.USER_REJECTED,
};
class MetaMaskError extends CustomError.CustomError {
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
            const dynamicErrorCode = (_b = metaMaskErrorMap[(_a = errorObject.code) !== null && _a !== void 0 ? _a : '']) !== null && _b !== void 0 ? _b : ErrorCode.ErrorCode.DEFAULT;
            return new MetaMaskError(errorObject.message, dynamicErrorCode);
        }
        return new MetaMaskError(String(error), ErrorCode.ErrorCode.DEFAULT);
    }
}

exports.MetaMaskError = MetaMaskError;
exports.metaMaskErrorMap = metaMaskErrorMap;
