'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class SandboxMaximumThresholdReachedError extends DynamicError.DynamicError {
    constructor(errorMessage) {
        super(errorMessage);
        this.errorMessage = errorMessage;
    }
}

exports.SandboxMaximumThresholdReachedError = SandboxMaximumThresholdReachedError;
