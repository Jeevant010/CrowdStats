'use client'
import * as viemChains from 'viem/chains';
import { logger } from '../../logger.js';

// eslint-disable-next-line import/no-namespace
/**
 * Gets the chain object for the given chain id.
 * @param chainId - Chain id of the target EVM chain.
 * @returns Viem's chain object.
 */
const getChain = (chainId) => {
    for (const chain of Object.values(viemChains)) {
        if ('id' in chain) {
            if (chain.id === chainId) {
                return chain;
            }
        }
    }
    throw new Error(`Chain with id ${chainId} not found`);
};
const mapChain = (network) => {
    var _a;
    return ({
        blockExplorers: ((_a = network.blockExplorerUrls) === null || _a === void 0 ? void 0 : _a[0])
            ? {
                default: {
                    name: network.blockExplorerUrls[0],
                    url: network.blockExplorerUrls[0],
                },
            }
            : undefined,
        id: network.chainId,
        name: network.vanityName || network.name || network.chainName,
        nativeCurrency: network.nativeCurrency,
        rpcUrls: {
            default: { http: network.rpcUrls },
            public: { http: network.rpcUrls },
        },
    });
};
const getOrMapViemChain = (network) => {
    let viemChain;
    try {
        viemChain = getChain(network.chainId);
    }
    catch (_a) {
        logger.debug(`Chain with id ${network.chainId} not found in viem's chains`);
    }
    const mappedChain = mapChain(network);
    if (!viemChain) {
        return mappedChain;
    }
    // even if a chain is found in viem's chains, we still want to overwrite some values
    return Object.assign(Object.assign({}, viemChain), mappedChain);
};

export { getChain, getOrMapViemChain, mapChain };
