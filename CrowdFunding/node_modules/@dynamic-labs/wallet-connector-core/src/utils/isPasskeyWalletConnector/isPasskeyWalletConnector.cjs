'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isPasskeyWalletConnector = (walletConnector) => Boolean(walletConnector.getWebAuthnAttestation);

exports.isPasskeyWalletConnector = isPasskeyWalletConnector;
