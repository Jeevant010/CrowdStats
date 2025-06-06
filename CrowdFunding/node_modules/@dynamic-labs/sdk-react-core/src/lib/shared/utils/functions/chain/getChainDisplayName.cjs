'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var logger = require('../../../logger.cjs');

const getChainDisplayName = (chain) => {
    var _a;
    const displayName = (_a = walletConnectorCore.getChainInfoWithOverrides(chain)) === null || _a === void 0 ? void 0 : _a.displayName;
    if (!displayName) {
        logger.logger.error(`Chain name for "${chain}" not supported`);
        return chain;
    }
    return displayName;
};

exports.getChainDisplayName = getChainDisplayName;
