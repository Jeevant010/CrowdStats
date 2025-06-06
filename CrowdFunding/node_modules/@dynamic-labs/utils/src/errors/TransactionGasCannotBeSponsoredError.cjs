'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class TransactionGasCannotBeSponsoredError extends DynamicError.DynamicError {
    constructor() {
        super(TransactionGasCannotBeSponsoredError.message);
    }
    static isInstance(err) {
        var _a;
        const error = ((_a = err === null || err === void 0 ? void 0 : err.walk) === null || _a === void 0 ? void 0 : _a.call(err)) || err;
        return error instanceof TransactionGasCannotBeSponsoredError;
    }
    static isErrorMessage(err) {
        var _a;
        const errorWithMessage = err;
        return (((_a = errorWithMessage === null || errorWithMessage === void 0 ? void 0 : errorWithMessage.message) === null || _a === void 0 ? void 0 : _a.includes('userOp did not match any gas sponsoring policies')) || false);
    }
}
TransactionGasCannotBeSponsoredError.message = 'Transaction gas cannot be sponsored.';

exports.TransactionGasCannotBeSponsoredError = TransactionGasCannotBeSponsoredError;
