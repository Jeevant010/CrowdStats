'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Will merge the networks in the first param to the networks in the second param.
 * The firs param's networks will have priority in case of conflicts.
 *
 * @example
 * const DynamicSettings = {
 *    overrides: {
 *        evmNetworks: (networks) => mergeNetworks(myEvmNetworks, networks),
 *    }
 * }
 */
const mergeNetworks = (priorityNetworks, secondaryNetworks) => {
    const networks = [...priorityNetworks];
    secondaryNetworks.forEach((network) => {
        const hasNetwork = networks.some((item) => item.chainId === network.chainId);
        if (!hasNetwork)
            networks.push(network);
    });
    return networks;
};

exports.mergeNetworks = mergeNetworks;
