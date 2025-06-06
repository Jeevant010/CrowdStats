import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Args = {
    connectors: WalletConnector[];
};
export declare const useClearWalletConnectSessions: ({ connectors }: Args) => {
    clearAllWalletConnectSessions: () => void;
};
export {};
