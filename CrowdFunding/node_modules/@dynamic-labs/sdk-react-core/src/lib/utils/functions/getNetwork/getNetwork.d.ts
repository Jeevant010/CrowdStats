import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export declare const getNetwork: (walletConnector: WalletConnector | null) => Promise<number | string | undefined>;
