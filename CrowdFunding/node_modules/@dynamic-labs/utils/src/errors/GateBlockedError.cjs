'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class GateBlockedError extends DynamicError.DynamicError {
    constructor(walletPublicKey) {
        super('This address is blocked by the gate');
        this.walletPublicKey = walletPublicKey;
    }
}

exports.GateBlockedError = GateBlockedError;
