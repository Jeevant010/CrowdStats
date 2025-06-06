'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class UserRejectedRequestError extends DynamicError.DynamicError {
    constructor() {
        super('User rejected request', 'user_rejected_request');
    }
}

exports.UserRejectedRequestError = UserRejectedRequestError;
