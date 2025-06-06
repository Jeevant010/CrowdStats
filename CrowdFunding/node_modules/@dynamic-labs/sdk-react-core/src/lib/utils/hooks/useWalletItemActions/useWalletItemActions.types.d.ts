import type { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
export type OpenWalletHandler = (walletKey: string, handlers?: {
    openCustodialWallet: (walletConnector: InternalWalletConnector) => void;
    openExtensionWallet: (walletConnector: InternalWalletConnector) => void;
    openMobileWallet: (walletConnector: InternalWalletConnector) => void;
}) => void;
