'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class EmailAlreadyExistsError extends DynamicError.DynamicError {
    constructor() {
        super('Email already exists');
    }
}

exports.EmailAlreadyExistsError = EmailAlreadyExistsError;
