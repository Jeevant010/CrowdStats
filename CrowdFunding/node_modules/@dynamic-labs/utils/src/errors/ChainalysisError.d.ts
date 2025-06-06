import { DynamicError } from './DynamicError';
export declare class ChainalysisError extends DynamicError {
    walletPublicKey: string | undefined;
    constructor(walletPublicKey: string);
}
