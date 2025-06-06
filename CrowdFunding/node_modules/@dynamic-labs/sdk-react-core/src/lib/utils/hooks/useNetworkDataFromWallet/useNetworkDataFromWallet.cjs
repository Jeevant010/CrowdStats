'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePromise = require('../usePromise/usePromise.cjs');

const useNetworkDataFromWallet = (wallet) => {
    const { data: network } = usePromise.usePromise(() => wallet === null || wallet === void 0 ? void 0 : wallet.connector.getNetwork(true), {
        enabled: Boolean(wallet),
    });
    if (!wallet || !network)
        return undefined;
    return wallet.connector
        .getEnabledNetworks()
        .find((_network) => _network.chainId === network);
};

exports.useNetworkDataFromWallet = useNetworkDataFromWallet;
