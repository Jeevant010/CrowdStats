'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isEmailOTPWalletConnector = (walletConnector) => Boolean(walletConnector.verifyOneTimePassword);

exports.isEmailOTPWalletConnector = isEmailOTPWalletConnector;
