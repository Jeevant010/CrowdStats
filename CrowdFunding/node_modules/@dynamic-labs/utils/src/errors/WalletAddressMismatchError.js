'use client'
import { DynamicError } from './DynamicError.js';

class WalletAddressMismatchError extends DynamicError {
    constructor(message, { activeAddress, expectedAddress, walletName, }) {
        super(message, 'wallet_address_mismatch_error');
        this.expectedAddress = expectedAddress;
        this.activeAddress = activeAddress;
        this.walletName = walletName;
    }
}

export { WalletAddressMismatchError };
