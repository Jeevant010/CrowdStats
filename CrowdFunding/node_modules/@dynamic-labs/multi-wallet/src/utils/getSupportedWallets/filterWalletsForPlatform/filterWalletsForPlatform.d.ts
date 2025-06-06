import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
export declare const filterWalletsForPlatform: (walletBook: WalletBookSchema, connectors: InternalWalletConnector[]) => import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector[];
