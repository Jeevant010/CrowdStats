import { DynamicError } from './DynamicError';
export declare class NoAccessError extends DynamicError {
    walletPublicKey?: string;
    email?: string;
    phoneNumber?: string;
    socialProvider?: string;
    socialUsername?: string;
    constructor({ walletPublicKey, email, phoneNumber, socialProvider, socialUsername, }: {
        email?: string;
        walletPublicKey?: string;
        phoneNumber?: string;
        socialProvider?: string;
        socialUsername?: string;
    });
}
