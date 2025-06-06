/// <reference types="react" />
import { Wallet } from '../../../../../shared';
type Props = {
    connectedWallet: Wallet;
    selectedWalletToSwitchTo: Wallet | undefined;
};
export declare const SwitchOrUseActiveAccountView: ({ connectedWallet, selectedWalletToSwitchTo, }: Props) => JSX.Element;
export {};
