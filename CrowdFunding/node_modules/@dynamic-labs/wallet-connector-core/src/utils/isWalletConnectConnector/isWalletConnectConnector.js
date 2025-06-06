'use client'
const isWalletConnectConnector = (connector) => Boolean(connector === null || connector === void 0 ? void 0 : connector.isWalletConnect);

export { isWalletConnectConnector };
