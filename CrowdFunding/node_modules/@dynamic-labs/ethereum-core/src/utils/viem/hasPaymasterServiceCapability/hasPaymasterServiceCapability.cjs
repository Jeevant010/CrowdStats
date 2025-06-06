'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const hasPaymasterServiceCapability = (capabilities, chainId) => {
    var _a;
    if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities[chainId])) {
        return false;
    }
    const chainCapabilities = capabilities[chainId];
    return Boolean((_a = chainCapabilities['paymasterService']) === null || _a === void 0 ? void 0 : _a.supported);
};

exports.hasPaymasterServiceCapability = hasPaymasterServiceCapability;
