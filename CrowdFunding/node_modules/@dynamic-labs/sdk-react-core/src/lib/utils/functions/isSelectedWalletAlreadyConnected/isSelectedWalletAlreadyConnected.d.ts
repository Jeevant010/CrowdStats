import { UserProfile } from '@dynamic-labs/types';
import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { Wallet } from '../../../shared/types';
export declare const isSelectedWalletAlreadyConnected: (linkedWallets: Wallet[], selectedWallet: WalletConnector, user?: UserProfile | undefined) => boolean;
