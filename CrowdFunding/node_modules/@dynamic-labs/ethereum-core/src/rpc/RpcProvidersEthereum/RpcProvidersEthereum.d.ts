import { Chain, PublicClient, Transport, HttpTransportConfig } from 'viem';
import { RpcProviders } from '@dynamic-labs/rpc-providers';
type IEvmRpcProvider = {
    chainId: number;
    chainName: string;
    provider: PublicClient<Transport, Chain>;
};
export type RegisterEvmProvidersConfig = {
    /**
     * @deprecated Use `httpTransportConfig` instead.
     */
    publicClientHttpTransportConfig?: HttpTransportConfig;
    httpTransportConfig?: HttpTransportConfig;
};
declare module '@dynamic-labs/rpc-providers' {
    type EvmRpcProvider = IEvmRpcProvider;
    interface RpcProviderLookup {
        evm: EvmRpcProvider[];
    }
    interface IChainRpcProviders {
        getEvmProviderByChainId(rpcProviders: RpcProviders, chainId: number): EvmRpcProvider | undefined;
        registerEvmProviders(providersConfig: RegisterEvmProvidersConfig): void;
    }
}
export {};
