'use client'
import { DynamicError } from './DynamicError.js';

class MergeAccountsConfirmationError extends DynamicError {
    constructor({ code, mergeConflicts, walletAddress, }) {
        super('MergeAccountsConfirmationError', code);
        this.mergeConflicts = mergeConflicts;
        this.walletAddress = walletAddress;
    }
}

export { MergeAccountsConfirmationError };
