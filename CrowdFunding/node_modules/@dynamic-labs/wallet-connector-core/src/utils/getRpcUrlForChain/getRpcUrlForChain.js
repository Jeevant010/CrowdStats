'use client'
const getRpcUrlForChain = ({ networks, chainId, }) => {
    var _a;
    const network = networks.find((network) => network.chainId === chainId);
    if (!network) {
        return undefined;
    }
    return ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
};

export { getRpcUrlForChain };
