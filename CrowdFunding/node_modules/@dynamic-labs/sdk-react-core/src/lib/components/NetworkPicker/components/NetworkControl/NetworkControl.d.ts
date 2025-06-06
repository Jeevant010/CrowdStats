import { Dispatch, SetStateAction } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    activeClassName?: string;
    buttonClassName?: string;
    isOpen: boolean;
    loading: boolean;
    network: number | string | undefined;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    showNetworkName?: boolean;
    walletConnector: WalletConnector;
};
export declare const NetworkControl: ({ loading, walletConnector, buttonClassName, network, activeClassName, isOpen, setIsOpen, showNetworkName, }: Props) => JSX.Element;
export {};
