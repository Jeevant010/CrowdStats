'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const findEvmNetwork = ({ chainId, name, networks, }) => {
    if (!chainId && !name) {
        return undefined;
    }
    if (chainId && name) {
        return networks.find((network) => network.chainId === chainId && network.name === name);
    }
    else if (chainId) {
        return networks.find((network) => network.chainId === chainId);
    }
    else {
        return networks.find((network) => network.name === name);
    }
};

exports.findEvmNetwork = findEvmNetwork;
