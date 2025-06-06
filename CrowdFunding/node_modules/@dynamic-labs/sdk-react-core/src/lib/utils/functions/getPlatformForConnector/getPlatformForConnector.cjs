'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const getPlatformForConnector = (connector) => utils.isMobile() || connector.isWalletConnect ? 'mobile' : 'desktop';

exports.getPlatformForConnector = getPlatformForConnector;
