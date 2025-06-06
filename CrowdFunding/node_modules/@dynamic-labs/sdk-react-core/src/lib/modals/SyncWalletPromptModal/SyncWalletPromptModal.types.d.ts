import { WalletConnector } from '../../..';
export type SyncWalletPromptModalProps = {
    expectedAddress: string;
    connector: WalletConnector;
    onResolve: (isInSync: boolean) => void;
    onReject: (error: unknown) => void;
    activeAddress?: string;
};
