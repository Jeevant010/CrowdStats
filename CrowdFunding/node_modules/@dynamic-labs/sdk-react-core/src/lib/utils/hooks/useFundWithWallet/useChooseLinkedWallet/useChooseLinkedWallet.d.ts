import { Wallet } from '@dynamic-labs/wallet-connector-core';
type ChooseLinkedWalletProps = {
    showBackButton?: boolean;
};
export declare const useChooseLinkedWallet: () => {
    chooseLinkedWallet: ({ showBackButton }?: ChooseLinkedWalletProps) => Promise<Wallet<import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector> | undefined>;
    filteredWallets: Wallet<import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector>[];
};
export {};
