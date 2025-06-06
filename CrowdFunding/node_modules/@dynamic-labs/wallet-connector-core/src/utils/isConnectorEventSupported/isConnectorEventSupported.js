'use client'
const isConnectorEventSupported = (connector, event, platform) => {
    var _a, _b, _c;
    return !((_c = (_b = (_a = connector.metadata.walletLimitations) === null || _a === void 0 ? void 0 : _a[platform]) === null || _b === void 0 ? void 0 : _b.unsupportedEvents) === null || _c === void 0 ? void 0 : _c.includes(event));
};

export { isConnectorEventSupported };
