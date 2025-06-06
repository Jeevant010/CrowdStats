'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var message = require('./utils/message/message.cjs');
var getEnabledProviders = require('./utils/getEnabledProviders/getEnabledProviders.cjs');
var getEnabledWallets = require('./utils/getEnabledWallets/getEnabledWallets.cjs');
var getSupportedWallets = require('./utils/getSupportedWallets/getSupportedWallets.cjs');
var getSupportedChainsForWalletConnector = require('./utils/getSupportedChainsForWalletConnector/getSupportedChainsForWalletConnector.cjs');
var getWalletConnectorConstructorOptions = require('./utils/getWalletConnectorConstructorOptions/getWalletConnectorConstructorOptions.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/multi-wallet', _package.version);

exports.generateMessageToSign = message.generateMessageToSign;
exports.getEnabledProviders = getEnabledProviders.getEnabledProviders;
exports.getEnabledWallets = getEnabledWallets.getEnabledWallets;
exports.getSupportedWallets = getSupportedWallets.getSupportedWallets;
exports.getSupportedChainsForWalletConnector = getSupportedChainsForWalletConnector.getSupportedChainsForWalletConnector;
exports.getWalletConnectorConstructorOptions = getWalletConnectorConstructorOptions.getWalletConnectorConstructorOptions;
