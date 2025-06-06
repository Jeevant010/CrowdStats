import { WalletAdditionalAddress } from '@dynamic-labs/sdk-api-core';
export interface BaseWalletProps {
    id: string;
    key: string;
    address: string;
    /**
     * Additional addresses associated to the wallet
     * like ordinals and payment addresses for bitcoin wallets
     */
    additionalAddresses?: WalletAdditionalAddress[];
    chain: string;
    /**
     * If there is a current user, this will be true if and only if the user has signed this wallet
     * to link it to their account
     */
    isAuthenticated: boolean;
}
export declare class BaseWallet {
    id: string;
    key: string;
    address: string;
    additionalAddresses: WalletAdditionalAddress[];
    chain: string;
    isAuthenticated: boolean;
    constructor({ id, key, address, additionalAddresses, chain, isAuthenticated, }: BaseWalletProps);
}
