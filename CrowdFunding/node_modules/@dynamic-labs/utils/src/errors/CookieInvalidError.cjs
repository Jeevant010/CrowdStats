'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class CookieInvalidError extends DynamicError.DynamicError {
    constructor() {
        super('The cookie is invalid or expired');
    }
}

exports.CookieInvalidError = CookieInvalidError;
