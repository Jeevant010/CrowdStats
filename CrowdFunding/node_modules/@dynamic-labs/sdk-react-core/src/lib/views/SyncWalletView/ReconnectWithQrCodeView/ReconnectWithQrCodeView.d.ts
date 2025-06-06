import { FC } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export type ReconnectWithQrCodeViewProps = {
    onCancel: () => void;
    onSuccess: () => void;
    connector: WalletConnector;
    expectedAddress: string;
};
export declare const ReconnectWithQrCodeView: FC<ReconnectWithQrCodeViewProps>;
