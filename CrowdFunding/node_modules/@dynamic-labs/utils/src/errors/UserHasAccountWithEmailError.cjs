'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class UserHasAccountWithEmailError extends DynamicError.DynamicError {
    constructor(error) {
        super(error);
        this.error = error;
    }
}

exports.UserHasAccountWithEmailError = UserHasAccountWithEmailError;
