'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isSessionKeyCompatibleWalletConnector = require('../isSessionKeyCompatibleWalletConnector/isSessionKeyCompatibleWalletConnector.cjs');

const isSessionKeyCompatibleWallet = (wallet) => isSessionKeyCompatibleWalletConnector.isSessionKeyCompatibleWalletConnector(wallet.connector);

exports.isSessionKeyCompatibleWallet = isSessionKeyCompatibleWallet;
