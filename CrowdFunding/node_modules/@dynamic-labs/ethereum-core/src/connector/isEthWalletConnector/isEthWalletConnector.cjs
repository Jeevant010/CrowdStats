'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isEthWalletConnector = (connector) => Boolean(connector === null || connector === void 0 ? void 0 : connector.getActiveAccount);

exports.isEthWalletConnector = isEthWalletConnector;
