import { AuthenticatorType, Wallet } from '@dynamic-labs/wallet-connector-core';
import { EmbeddedWalletCurrentAction } from '../../../shared/types';
export declare const usePasskeyRecovery: () => {
    readonly addRecoveryEmail: (emailInput: string) => Promise<void>;
    readonly initPasskeyRecoveryProcess: (authenticatorType?: AuthenticatorType, currentAction?: EmbeddedWalletCurrentAction) => Promise<Wallet>;
    readonly shouldInitRecovery: () => Promise<boolean>;
};
