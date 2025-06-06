/// <reference types="react" />
import { Icon } from '../../../../shared';
type Props = {
    iconSize?: number;
    chainName: string;
    Icon: Icon | null;
    showNetwork?: boolean;
    walletKey?: string;
    iconUrl?: string;
};
export declare const WalletIconWithNetwork: ({ iconSize, chainName, Icon, showNetwork, walletKey, iconUrl, }: Props) => JSX.Element;
export {};
