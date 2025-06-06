/// <reference types="react" />
import { WalletConnector } from '../../..';
type Props = {
    activeClassName?: string;
    buttonClassName?: string;
    checkboxClassName?: string;
    connector: WalletConnector | undefined;
    customCallbackOnSuccess?: () => void;
    listClassName?: string;
    mainClassName?: string;
    showNetworkName?: boolean;
    currentNetwork: string | number | undefined;
    isLoading?: boolean;
};
export declare const NetworkPicker: ({ activeClassName, buttonClassName, checkboxClassName, connector, listClassName, mainClassName, showNetworkName, customCallbackOnSuccess, currentNetwork, isLoading, }: Props) => JSX.Element | null;
export {};
