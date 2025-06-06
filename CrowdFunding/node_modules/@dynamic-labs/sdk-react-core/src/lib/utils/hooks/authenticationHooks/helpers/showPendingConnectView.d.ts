import { type WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ViewType } from '../../../../context/ViewContext';
export declare const showPendingConnectView: (walletConnector: WalletConnector, pushView: (view: ViewType) => void) => Promise<void>;
