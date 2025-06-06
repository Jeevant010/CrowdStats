'use client'
const isSessionKeyCompatibleWalletConnector = (walletConnector) => {
    const connector = walletConnector;
    return Boolean(typeof (connector === null || connector === void 0 ? void 0 : connector.isSessionKeyCompatible) === 'function' &&
        connector.isSessionKeyCompatible());
};

export { isSessionKeyCompatibleWalletConnector };
