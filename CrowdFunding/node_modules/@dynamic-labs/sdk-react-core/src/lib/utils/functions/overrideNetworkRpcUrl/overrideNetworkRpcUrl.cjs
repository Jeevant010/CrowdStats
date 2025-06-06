'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Will override the rpcUrl of the networks in the first param with the urls specified in the second param.
 *
 * @example
 * const DynamicSettings = {
 *    overrides: {
 *        evmNetworks: (networks) => overrideNetworkRpcUrl(networks, {
 *            "1": ["https://eth.customrpc.com", "https://eth.customrpc2.com"],
 *            "137": ["https://polygon.customrpc.com"],
 *        }),
 *    }
 * }
 */
const overrideNetworkRpcUrl = (networks, rpcUrlOverrides) => {
    const updatedNetworks = [];
    networks.forEach((network) => {
        if (rpcUrlOverrides[network.chainId]) {
            updatedNetworks.push(Object.assign(Object.assign({}, network), { privateCustomerRpcUrls: rpcUrlOverrides[network.chainId] }));
        }
        else {
            updatedNetworks.push(network);
        }
    });
    return updatedNetworks;
};

exports.overrideNetworkRpcUrl = overrideNetworkRpcUrl;
