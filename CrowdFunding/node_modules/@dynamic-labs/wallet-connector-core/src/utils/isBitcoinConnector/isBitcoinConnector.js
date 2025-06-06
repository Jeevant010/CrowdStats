'use client'
const isBitcoinConnector = (connector) => Boolean(connector === null || connector === void 0 ? void 0 : connector.sendBitcoin);

export { isBitcoinConnector };
