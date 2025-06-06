'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isBitcoinConnector = (connector) => Boolean(connector === null || connector === void 0 ? void 0 : connector.sendBitcoin);

exports.isBitcoinConnector = isBitcoinConnector;
