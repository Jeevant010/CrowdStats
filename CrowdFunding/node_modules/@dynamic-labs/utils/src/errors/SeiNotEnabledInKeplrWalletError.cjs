'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CustomError = require('./CustomError.cjs');
var ErrorCode = require('./ErrorCode.cjs');

class SeiNotEnabledInKeplrWalletError extends CustomError.CustomError {
    constructor() {
        super('Sei network is not enabled in Keplr', ErrorCode.ErrorCode.SEI_NOT_ENABLED_IN_KEPLR_WALLET);
    }
}

exports.SeiNotEnabledInKeplrWalletError = SeiNotEnabledInKeplrWalletError;
