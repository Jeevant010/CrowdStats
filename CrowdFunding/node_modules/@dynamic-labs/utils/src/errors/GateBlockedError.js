'use client'
import { DynamicError } from './DynamicError.js';

class GateBlockedError extends DynamicError {
    constructor(walletPublicKey) {
        super('This address is blocked by the gate');
        this.walletPublicKey = walletPublicKey;
    }
}

export { GateBlockedError };
