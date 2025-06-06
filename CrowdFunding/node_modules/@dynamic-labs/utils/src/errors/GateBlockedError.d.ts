import { DynamicError } from './DynamicError';
export declare class GateBlockedError extends DynamicError {
    walletPublicKey: string | undefined;
    constructor(walletPublicKey: string);
}
