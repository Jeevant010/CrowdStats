import { WalletConnectorCore } from '@dynamic-labs/wallet-connector-core';
export declare const useWalletItemActions: () => {
    handleAlreadyConnectedWallet: (walletConnector: WalletConnectorCore.WalletConnector) => Promise<void>;
    handleCustodialWalletClick: (walletConnector: WalletConnectorCore.WalletConnector) => Promise<void>;
    handleInstalledExtensionClick: (walletConnector: WalletConnectorCore.WalletConnector) => Promise<void>;
    handleMobileWalletClick: (walletConnector: WalletConnectorCore.WalletConnector) => Promise<void>;
    handleUninstalledClick: (walletConnector: WalletConnectorCore.WalletConnector) => Promise<void>;
    handleWalletItemClick: (wallet: import("../../../shared").WalletOption) => Promise<void>;
    openWallet: import("./useWalletItemActions.types").OpenWalletHandler;
};
