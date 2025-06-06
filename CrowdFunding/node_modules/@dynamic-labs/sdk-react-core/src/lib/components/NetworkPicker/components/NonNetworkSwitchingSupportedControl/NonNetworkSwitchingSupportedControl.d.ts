/// <reference types="react" />
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { GenericNetwork } from '@dynamic-labs/types';
type Props = {
    className?: string;
    showNetworkName?: boolean;
    walletConnector: WalletConnector;
    network?: string | number;
    enabledNetworks?: GenericNetwork[];
};
export declare const NonNetworkSwitchingSupportedControl: ({ walletConnector, className, showNetworkName, network, enabledNetworks, }: Props) => JSX.Element;
export {};
