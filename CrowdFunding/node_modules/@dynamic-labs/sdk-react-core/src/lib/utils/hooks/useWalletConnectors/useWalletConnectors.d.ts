import { Dispatch, SetStateAction } from 'react';
import { UserProfile } from '@dynamic-labs/types';
import { Wallet, WalletOption } from '../../../shared';
import { MultiWalletWidgetStateSetter } from '../multiWallet';
type Props = {
    connectedWallets: Wallet[];
    walletConnectorOptions: WalletOption[];
    setMultiWalletWidgetState: MultiWalletWidgetStateSetter;
    primaryWalletId: string | undefined;
    user?: UserProfile;
    canHaveMultipleWalletsConnected?: boolean;
    separateSmartWalletAndSigner?: boolean;
};
export interface UseWalletConnectors {
    primaryWallet: Wallet | null;
    secondaryWallets: Wallet[];
    setPrimaryWallet: (walletId: string) => Promise<void>;
    setShowQrcodeModal: Dispatch<SetStateAction<boolean>>;
    showQrcodeModal: boolean;
    wallets: Wallet[];
}
export declare const useWalletConnectors: ({ connectedWallets, walletConnectorOptions, setMultiWalletWidgetState, primaryWalletId, user, canHaveMultipleWalletsConnected, separateSmartWalletAndSigner, }: Props) => UseWalletConnectors;
export {};
