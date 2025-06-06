'use client'
import { usePromise } from '../usePromise/usePromise.js';

const useNetworkDataFromWallet = (wallet) => {
    const { data: network } = usePromise(() => wallet === null || wallet === void 0 ? void 0 : wallet.connector.getNetwork(true), {
        enabled: Boolean(wallet),
    });
    if (!wallet || !network)
        return undefined;
    return wallet.connector
        .getEnabledNetworks()
        .find((_network) => _network.chainId === network);
};

export { useNetworkDataFromWallet };
