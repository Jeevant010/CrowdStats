import { Wallet } from '../shared/types/wallets';
export type PasskeyEvents = {
    passkeyRecoveryCompleted: (wallet: Wallet) => void;
    passkeyRecoveryFailed: (error: unknown) => void;
};
