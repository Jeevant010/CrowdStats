'use client'
import { CustomError } from './CustomError.js';
import { ErrorCode } from './ErrorCode.js';

class SeiNotEnabledInKeplrWalletError extends CustomError {
    constructor() {
        super('Sei network is not enabled in Keplr', ErrorCode.SEI_NOT_ENABLED_IN_KEPLR_WALLET);
    }
}

export { SeiNotEnabledInKeplrWalletError };
