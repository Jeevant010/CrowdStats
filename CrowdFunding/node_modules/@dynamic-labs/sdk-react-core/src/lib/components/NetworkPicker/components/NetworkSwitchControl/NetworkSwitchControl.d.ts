import { Dispatch, SetStateAction } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { GenericNetwork } from '@dynamic-labs/types';
type Props = {
    activeClassName?: string;
    className?: string;
    enabledNetworks: GenericNetwork[];
    isOpen: boolean;
    loading: boolean;
    network: number | string | undefined;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    showNetworkName?: boolean;
    walletConnector: WalletConnector;
};
export declare const NetworkSwitchControl: ({ enabledNetworks, className, activeClassName, network, walletConnector, isOpen, setIsOpen, showNetworkName, }: Props) => JSX.Element;
export {};
