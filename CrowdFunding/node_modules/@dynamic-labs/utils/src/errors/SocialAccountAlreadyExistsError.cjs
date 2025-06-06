'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class SocialAccountAlreadyExistsError extends DynamicError.DynamicError {
    constructor() {
        super('Social account already exists');
    }
}

exports.SocialAccountAlreadyExistsError = SocialAccountAlreadyExistsError;
