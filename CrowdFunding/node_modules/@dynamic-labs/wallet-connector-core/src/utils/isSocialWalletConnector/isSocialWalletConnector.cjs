'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSocialWalletConnector = (walletConnector) => Boolean(walletConnector.canConnectViaSocial);

exports.isSocialWalletConnector = isSocialWalletConnector;
