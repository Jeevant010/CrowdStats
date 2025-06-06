import { EvmRpcProvider, RpcProvidersSelector } from '@dynamic-labs/rpc-providers';
export type EvmRpcProviderMethods = {
    defaultProvider: EvmRpcProvider | undefined;
    providers: EvmRpcProvider[] | undefined;
    getProviderByChainId: (chainId: number) => EvmRpcProvider | undefined;
};
export declare const evmProvidersSelector: RpcProvidersSelector<EvmRpcProviderMethods>;
