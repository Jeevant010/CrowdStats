import { ReactElement } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type QrCodeContainerProps = {
    Icon: ReactElement;
    accentColor: string;
    desktopUri?: string;
    qrcodeValue: string;
    showCopyToClipboardButton?: boolean;
    walletConnector?: WalletConnector;
    showQrCodeMessage: boolean;
    showQrCodeImage?: boolean;
};
export declare const QrCodeContainer: ({ accentColor, walletConnector, qrcodeValue, Icon: MainIcon, showCopyToClipboardButton, desktopUri, showQrCodeMessage, showQrCodeImage, }: QrCodeContainerProps) => JSX.Element;
export {};
