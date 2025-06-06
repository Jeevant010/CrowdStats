'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isTurnkeyWalletConnector = (walletConnector) => {
    const turnkeyWalletConnector = walletConnector;
    return Boolean(turnkeyWalletConnector &&
        turnkeyWalletConnector.key === 'turnkeyhd' &&
        typeof turnkeyWalletConnector.getWebAuthnAttestation === 'function' &&
        typeof turnkeyWalletConnector.getAuthenticatorHandler === 'function' &&
        typeof turnkeyWalletConnector.getExportHandler === 'function' &&
        typeof turnkeyWalletConnector.isSessionKeyCompatible === 'function' &&
        typeof turnkeyWalletConnector.createOrRestoreSession === 'function');
};

exports.isTurnkeyWalletConnector = isTurnkeyWalletConnector;
