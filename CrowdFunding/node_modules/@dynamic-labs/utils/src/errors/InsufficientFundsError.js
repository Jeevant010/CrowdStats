'use client'
import { DynamicError } from './DynamicError.js';

class InsufficientFundsError extends DynamicError {
    constructor() {
        super(InsufficientFundsError.message);
    }
    static isInstance(err) {
        var _a;
        const error = ((_a = err === null || err === void 0 ? void 0 : err.walk) === null || _a === void 0 ? void 0 : _a.call(err)) || err;
        return error instanceof InsufficientFundsError;
    }
    static isErrorMessage(err) {
        var _a;
        const errorWithMessage = err;
        return (((_a = errorWithMessage === null || errorWithMessage === void 0 ? void 0 : errorWithMessage.message) === null || _a === void 0 ? void 0 : _a.includes("AA21 didn't pay prefund")) || false);
    }
}
InsufficientFundsError.message = 'Insufficient funds.';

export { InsufficientFundsError };
