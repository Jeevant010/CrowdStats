import { type NetworkConfigurationMap } from '@dynamic-labs/types';
export declare enum ProviderChain {
    ECLIPSE = "eclipse",
    EVM = "evm",
    SOLANA = "solana",
    STARKNET = "starknet",
    SUI = "sui"
}
export interface RpcProviderLookup {
    [key: string]: any;
}
export type RpcProviders = {
    [key in ProviderChain]?: RpcProviderLookup[key];
};
export type RegisteredProviderMethod = (configuration: NetworkConfigurationMap) => RpcProviders[keyof RpcProviders] | undefined;
export type RegisteredProviderMethods = {
    [key in ProviderChain]?: RegisteredProviderMethod;
};
/**
 * This type is used to extract provider methods of a specific chain from an RpcProviders array
 */
export type RpcProvidersSelector<T extends Record<string, any>> = (providers: RpcProviders | undefined) => T;
