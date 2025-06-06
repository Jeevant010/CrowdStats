import { ChainConfiguration, JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletOption } from '../../../shared';
export declare const findTurnkeyWalletByChain: (walletOptions: WalletOption[] | undefined, chainName: string | undefined) => WalletOption | undefined;
type FindTurnkeyWalletByChainResult = (JwtVerifiedCredential & WalletOption) | WalletOption | undefined;
export declare const findTurnkeyWalletByPrimaryChain: (walletOptions: WalletOption[] | undefined, chainConfigurations: ChainConfiguration[] | undefined, verifiedCredentials: JwtVerifiedCredential[]) => FindTurnkeyWalletByChainResult;
export declare const findTurnkeyWalletByAddress: (walletOptions: WalletOption[] | undefined, verifiedCredentials: JwtVerifiedCredential[], address: string | undefined) => (JwtVerifiedCredential & {
    walletConnector?: InternalWalletConnector;
}) | undefined;
export {};
