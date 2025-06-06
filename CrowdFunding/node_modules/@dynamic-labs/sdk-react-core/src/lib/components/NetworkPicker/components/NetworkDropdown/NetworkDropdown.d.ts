import { Dispatch, RefObject, SetStateAction } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type NetworkDropdownProps = {
    anchorRef: RefObject<HTMLDivElement>;
    connector: WalletConnector;
    customCallbackOnSuccess?: () => void;
    setIsNetworkPickerOpen: Dispatch<SetStateAction<boolean>>;
    isNetworkPickerOpen: boolean;
    className?: string;
    checkboxClassName?: string;
    currentNetwork: string | number | undefined;
};
export declare const NetworkDropdown: ({ anchorRef, connector, customCallbackOnSuccess, setIsNetworkPickerOpen, isNetworkPickerOpen, currentNetwork, className, checkboxClassName, }: NetworkDropdownProps) => JSX.Element | null;
export {};
