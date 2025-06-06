import { NetworkConfigurationMap } from '@dynamic-labs/types';
import { ProviderChain, RegisteredProviderMethod, RpcProviders } from './RpcProviders';
import { IChainRpcProviders } from '.';
export declare class ChainRpcProvidersClass {
    private static instance;
    private static providers;
    private getProvidersMethods;
    static get client(): ChainRpcProvidersClass;
    private constructor();
    static wipeInstance: () => void;
    static getProviders(configurations: NetworkConfigurationMap): RpcProviders;
    static registerChainProviders(providerChain: ProviderChain, fn: RegisteredProviderMethod): Promise<void>;
}
export declare const ChainRpcProviders: IChainRpcProviders;
