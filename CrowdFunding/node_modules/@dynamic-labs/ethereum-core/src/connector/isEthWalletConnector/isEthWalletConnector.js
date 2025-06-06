'use client'
const isEthWalletConnector = (connector) => Boolean(connector === null || connector === void 0 ? void 0 : connector.getActiveAccount);

export { isEthWalletConnector };
