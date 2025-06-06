'use client'
// Network is not supported if:
//   - its undefined
//   - its not in supportedNetworks
const isNetworkUnsupported = (network, supportedNetworks) => !(supportedNetworks === null || supportedNetworks === void 0 ? void 0 : supportedNetworks.find((supportedNetwork) => { var _a; return network && ((_a = supportedNetwork.chainId) === null || _a === void 0 ? void 0 : _a.toString()) === network.toString(); }));

export { isNetworkUnsupported };
