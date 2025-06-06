import { DynamicError } from './DynamicError';
export declare class WalletAddressMismatchError extends DynamicError {
    expectedAddress: string | undefined;
    activeAddress: string | undefined;
    walletName: string | undefined;
    constructor(message: string, { activeAddress, expectedAddress, walletName, }: {
        activeAddress?: string;
        expectedAddress?: string;
        walletName?: string;
    });
}
