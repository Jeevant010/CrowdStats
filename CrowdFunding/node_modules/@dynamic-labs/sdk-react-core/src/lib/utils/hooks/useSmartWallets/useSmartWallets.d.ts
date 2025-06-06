import { Wallet } from '@dynamic-labs/wallet-connector-core';
export type UseSmartContractWalletsReturn = {
    /**
     * Allows you to tell whether a wallet is a Smart Contract Wallet.
     */
    isSmartWallet: (wallet: Wallet) => boolean;
    /**
     * Given a smart wallet, returns the correspondent EOA wallet.
     * If a non smart wallet is provided, returns undefined.
     */
    getEOAWallet: (wallet: Wallet) => Wallet | undefined;
    /**
     * Given an EOA wallet, returns the corresponding smart wallet.
     * If a non EOA wallet is provided, returns undefined.
     */
    getSmartWallet: (wallet: Wallet) => Wallet | undefined;
};
export declare const useSmartWallets: () => UseSmartContractWalletsReturn;
