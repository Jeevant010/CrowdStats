'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rpcProviders = require('@dynamic-labs/rpc-providers');

const evmProvidersSelector = (providers) => {
    if (!providers)
        return {
            defaultProvider: undefined,
            getProviderByChainId: () => undefined,
            providers: [],
        };
    const getProviderByChainId = (chainId) => { var _a; return (_a = rpcProviders.ChainRpcProviders.getEvmProviderByChainId) === null || _a === void 0 ? void 0 : _a.call(rpcProviders.ChainRpcProviders, providers, chainId); };
    return {
        defaultProvider: getProviderByChainId(1),
        getProviderByChainId,
        providers: providers === null || providers === void 0 ? void 0 : providers.evm,
    };
};

exports.evmProvidersSelector = evmProvidersSelector;
