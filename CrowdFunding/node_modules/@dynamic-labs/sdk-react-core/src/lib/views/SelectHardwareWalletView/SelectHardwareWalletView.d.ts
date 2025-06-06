import { FC } from 'react';
import { WalletOption } from '../../shared';
type SelectHardwareWalletViewProps = {
    wallet: WalletOption;
    onSelectWallet?: (wallet: WalletOption) => void;
};
export declare const SelectHardwareWalletView: FC<SelectHardwareWalletViewProps>;
export {};
