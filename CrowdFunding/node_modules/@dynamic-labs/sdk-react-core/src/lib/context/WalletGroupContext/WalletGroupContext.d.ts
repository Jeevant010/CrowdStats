import React, { FC, PropsWithChildren } from 'react';
import { WalletGroupOption, WalletOption } from '../../shared';
export type WalletGroupContextType = {
    selectedWalletGroup?: WalletGroupOption;
    navigateToWalletGroup: (walletGroup: WalletGroupOption, options?: {
        onSelectWallet?: (wallet: WalletOption) => void;
    }) => void;
};
export declare const WalletGroupContext: React.Context<WalletGroupContextType | undefined>;
export declare const useWalletGroupContext: () => WalletGroupContextType;
export declare const WalletGroupContextProvider: FC<PropsWithChildren>;
