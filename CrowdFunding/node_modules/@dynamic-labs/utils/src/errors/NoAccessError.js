'use client'
import { DynamicError } from './DynamicError.js';

class NoAccessError extends DynamicError {
    constructor({ walletPublicKey, email, phoneNumber, socialProvider, socialUsername, }) {
        super('User does not have access');
        this.email = email;
        this.walletPublicKey = walletPublicKey;
        this.phoneNumber = phoneNumber;
        this.socialProvider = socialProvider;
        this.socialUsername = socialUsername;
    }
}

export { NoAccessError };
