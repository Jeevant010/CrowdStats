'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class InvalidPhoneNumberError extends DynamicError.DynamicError {
    constructor(error) {
        super(error !== null && error !== void 0 ? error : 'Invalid phone number.');
    }
}

exports.InvalidPhoneNumberError = InvalidPhoneNumberError;
