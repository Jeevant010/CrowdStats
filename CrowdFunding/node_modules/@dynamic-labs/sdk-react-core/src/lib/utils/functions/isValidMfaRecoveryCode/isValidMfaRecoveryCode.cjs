'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isValidMfaRecoveryCode = (text) => {
    const regex = /^[a-zA-Z0-9]{10}$/;
    return regex.test(text);
};

exports.isValidMfaRecoveryCode = isValidMfaRecoveryCode;
