import { FC } from 'react';
import { Wallet } from '@dynamic-labs/wallet-connector-core';
type UserWalletsListProps = {
    onSelectWallet: (wallet: Wallet) => void;
    /**
     * When unspecified, all user wallets are shown.
     */
    wallets?: Wallet[];
};
export declare const UserWalletsList: FC<UserWalletsListProps>;
export {};
