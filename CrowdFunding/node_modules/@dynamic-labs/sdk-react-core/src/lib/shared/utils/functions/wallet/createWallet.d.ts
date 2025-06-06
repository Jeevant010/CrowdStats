import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import type { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletOption } from '../../../types';
export declare const createWallet: (walletBook: WalletBookSchema, walletConnector: InternalWalletConnector) => WalletOption;
