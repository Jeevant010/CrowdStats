'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class MissingEnvironmentIdError extends DynamicError.DynamicError {
    constructor() {
        super('You are missing the environmentId field in yours DynamicContextProvider settings prop');
    }
}

exports.MissingEnvironmentIdError = MissingEnvironmentIdError;
