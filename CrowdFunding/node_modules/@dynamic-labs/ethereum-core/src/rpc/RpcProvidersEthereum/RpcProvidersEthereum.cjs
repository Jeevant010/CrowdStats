'use client'
'use strict';

var viem = require('viem');
var rpcProviders = require('@dynamic-labs/rpc-providers');
var utils = require('@dynamic-labs/utils');
var getOrMapViemChain = require('../../utils/viem/getOrMapViemChain/getOrMapViemChain.cjs');

rpcProviders.ChainRpcProviders.getEvmProviderByChainId = (rpcProviders, chainId) => {
    var _a;
    const provider = (_a = rpcProviders['evm']) === null || _a === void 0 ? void 0 : _a.find((provider) => provider.chainId === chainId);
    return provider;
};
rpcProviders.ChainRpcProviders.registerEvmProviders = (providersConfig) => {
    if (!providersConfig) {
        throw new Error('providersConfig is required');
    }
    rpcProviders.ChainRpcProviders.registerChainProviders(rpcProviders.ProviderChain.EVM, (config) => {
        const rpcProviders = {};
        if (config === null || config === void 0 ? void 0 : config['evm']) {
            rpcProviders.evm = utils.parseEvmNetworks(config['evm']).map((network) => {
                var _a;
                const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                const provider = viem.createPublicClient({
                    chain: getOrMapViemChain.getOrMapViemChain(network),
                    transport: viem.http(rpcUrl, providersConfig === null || providersConfig === void 0 ? void 0 : providersConfig.httpTransportConfig),
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
