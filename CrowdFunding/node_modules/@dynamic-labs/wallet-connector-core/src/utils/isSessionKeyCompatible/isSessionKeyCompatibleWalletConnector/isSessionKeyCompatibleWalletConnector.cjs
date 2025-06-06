'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSessionKeyCompatibleWalletConnector = (walletConnector) => {
    const connector = walletConnector;
    return Boolean(typeof (connector === null || connector === void 0 ? void 0 : connector.isSessionKeyCompatible) === 'function' &&
        connector.isSessionKeyCompatible());
};

exports.isSessionKeyCompatibleWalletConnector = isSessionKeyCompatibleWalletConnector;
