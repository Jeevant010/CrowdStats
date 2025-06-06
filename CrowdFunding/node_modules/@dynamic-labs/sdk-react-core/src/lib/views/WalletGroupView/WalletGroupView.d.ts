import { FC } from 'react';
import { WalletOption } from '../../shared/types';
type WalletGroupViewProps = {
    onSelectWallet: (wallet: WalletOption) => void;
};
export declare const WalletGroupView: FC<WalletGroupViewProps>;
export {};
