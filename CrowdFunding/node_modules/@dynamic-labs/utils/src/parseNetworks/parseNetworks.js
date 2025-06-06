'use client'
import { parseChainId } from '../parseChainId/parseChainId.js';

const parseEvmNetworks = (networks) => {
    const clone = networks.slice();
    return clone.map((network) => {
        network.chainId = parseChainId(network.chainId);
        network.networkId = parseChainId(network.networkId);
        return network;
    });
};
const parseCosmosNetworks = (networks) => parseEvmNetworks(networks);

export { parseCosmosNetworks, parseEvmNetworks };
