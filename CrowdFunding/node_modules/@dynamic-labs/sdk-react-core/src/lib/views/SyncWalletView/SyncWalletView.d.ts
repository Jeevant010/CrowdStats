import { FC } from 'react';
import { WalletConnector } from '../../..';
export type SyncWalletViewProps = {
    onSuccess: (isInSync: boolean) => void;
    onError: (error: unknown, closePortal?: boolean) => void;
    connector: WalletConnector;
    expectedAddress: string;
    activeAddress?: string;
};
export declare const SyncWalletView: FC<SyncWalletViewProps>;
