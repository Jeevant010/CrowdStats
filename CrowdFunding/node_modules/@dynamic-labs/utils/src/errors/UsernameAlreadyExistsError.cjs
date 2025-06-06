'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class UsernameAlreadyExistsError extends DynamicError.DynamicError {
    constructor() {
        super('Username already exists');
    }
}

exports.UsernameAlreadyExistsError = UsernameAlreadyExistsError;
