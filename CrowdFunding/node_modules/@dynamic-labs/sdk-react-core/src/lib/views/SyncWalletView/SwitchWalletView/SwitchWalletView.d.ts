import { FC } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export type SwitchWalletViewProps = {
    onCancel: () => void;
    onTryToReconnect: () => void;
    connector: WalletConnector;
    expectedAddress: string;
    activeAddress?: string;
};
export declare const SwitchWalletView: FC<SwitchWalletViewProps>;
