import { Chain, InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
export declare const getSupportedChainsForWalletConnector: (walletBook: WalletBookSchema, walletConnector: InternalWalletConnector) => Chain[];
