import type { NetworkConfiguration } from '@dynamic-labs/sdk-api-core';
export type GenericNetwork = Omit<NetworkConfiguration, 'chainId' | 'networkId' | 'shortName' | 'chain'> & {
    chainId: number | string;
    networkId: number | string;
    bech32Prefix?: string;
};
export type EvmNetwork = Omit<GenericNetwork, 'chainId'> & {
    chainId: number;
};
export type CosmosNetwork = EvmNetwork;
export type NetworkConfigurationMap = {
    [key: string]: GenericNetwork[] | undefined;
};
