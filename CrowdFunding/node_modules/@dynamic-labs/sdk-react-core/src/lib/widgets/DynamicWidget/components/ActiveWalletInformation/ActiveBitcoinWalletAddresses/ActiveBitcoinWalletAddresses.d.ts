/// <reference types="react" />
import { MenuOption } from '../../../../../components';
import { Wallet } from '../../../../../shared';
type Props = {
    menuOption: MenuOption[];
    wallet?: Wallet;
};
export declare const ActiveBitcoinWalletAddresses: ({ menuOption, wallet }: Props) => JSX.Element;
export {};
