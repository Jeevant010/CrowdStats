'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class NoAccessError extends DynamicError.DynamicError {
    constructor({ walletPublicKey, email, phoneNumber, socialProvider, socialUsername, }) {
        super('User does not have access');
        this.email = email;
        this.walletPublicKey = walletPublicKey;
        this.phoneNumber = phoneNumber;
        this.socialProvider = socialProvider;
        this.socialUsername = socialUsername;
    }
}

exports.NoAccessError = NoAccessError;
