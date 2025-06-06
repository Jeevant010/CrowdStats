'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class TooManyEmailVerificationsError extends DynamicError.DynamicError {
    constructor() {
        super('Too many email verification attempts.');
    }
}

exports.TooManyEmailVerificationsError = TooManyEmailVerificationsError;
