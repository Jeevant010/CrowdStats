import { FC } from 'react';
import { Wallet } from '@dynamic-labs/wallet-connector-core';
type ChooseLinkedWalletViewProps = {
    showBackButton?: boolean;
    onSelectWallet: (wallet: Wallet) => void;
    wallets?: Wallet[];
};
export declare const ChooseLinkedWalletView: FC<ChooseLinkedWalletViewProps>;
export {};
