import { AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
export declare const useEmbeddedWalletAuthenticator: () => {
    addEmbeddedWalletRecoveryEmail: () => Promise<void>;
    createOrRefreshAuthenticatorSession: (authenticatorType?: AuthenticatorType) => Promise<import("@dynamic-labs/wallet-connector-core").Wallet<import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector> | undefined>;
};
