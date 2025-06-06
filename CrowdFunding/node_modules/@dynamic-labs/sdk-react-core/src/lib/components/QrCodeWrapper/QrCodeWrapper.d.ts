import { ReactElement } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export type QrCodeWrapperProps = {
    uri: string;
    desktopUri?: string;
    icon: ReactElement;
    accentColor: string;
    showCopyToClipboardButton?: boolean;
    walletConnector?: WalletConnector;
};
export declare const QrCodeWrapper: ({ uri, desktopUri, icon, accentColor, showCopyToClipboardButton, walletConnector, }: QrCodeWrapperProps) => JSX.Element;
