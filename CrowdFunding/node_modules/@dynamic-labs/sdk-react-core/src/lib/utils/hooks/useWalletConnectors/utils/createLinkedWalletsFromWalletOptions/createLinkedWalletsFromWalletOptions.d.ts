import { UserProfile } from '@dynamic-labs/types';
import { Wallet, WalletOption } from '../../../../../shared/types';
type CreateWalletsFromWalletOptionsProps = {
    user: UserProfile;
    primaryWalletId: string | undefined;
    walletConnectorOptions: WalletOption[] | undefined;
    separateSmartWalletAndSigner?: boolean;
};
export declare const createLinkedWalletsFromWalletOptions: ({ user, walletConnectorOptions, primaryWalletId, separateSmartWalletAndSigner, }: CreateWalletsFromWalletOptionsProps) => Wallet[];
export {};
