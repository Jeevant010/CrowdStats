import { FC } from 'react';
import { Wallet } from '../../../shared/types/wallets';
type UserWalletProps = {
    wallet: Wallet;
    onSelect?: () => void;
};
export declare const UserWallet: FC<UserWalletProps>;
export {};
