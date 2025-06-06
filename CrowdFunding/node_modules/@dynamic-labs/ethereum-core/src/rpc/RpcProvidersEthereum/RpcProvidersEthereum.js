'use client'
import { createPublicClient, http } from 'viem';
import { ChainRpcProviders, ProviderChain } from '@dynamic-labs/rpc-providers';
import { parseEvmNetworks } from '@dynamic-labs/utils';
import { getOrMapViemChain } from '../../utils/viem/getOrMapViemChain/getOrMapViemChain.js';

ChainRpcProviders.getEvmProviderByChainId = (rpcProviders, chainId) => {
    var _a;
    const provider = (_a = rpcProviders['evm']) === null || _a === void 0 ? void 0 : _a.find((provider) => provider.chainId === chainId);
    return provider;
};
ChainRpcProviders.registerEvmProviders = (providersConfig) => {
    if (!providersConfig) {
        throw new Error('providersConfig is required');
    }
    ChainRpcProviders.registerChainProviders(ProviderChain.EVM, (config) => {
        const rpcProviders = {};
        if (config === null || config === void 0 ? void 0 : config['evm']) {
            rpcProviders.evm = parseEvmNetworks(config['evm']).map((network) => {
                var _a;
                const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                const provider = createPublicClient({
                    chain: getOrMapViemChain(network),
                    transport: http(rpcUrl, providersConfig === null || providersConfig === void 0 ? void 0 : providersConfig.httpTransportConfig),
                });
                return {
                    chainId: network.chainId,
                    chainName: network.name,
                    provider,
                };
            });
        }
        return rpcProviders.evm;
    });
};
