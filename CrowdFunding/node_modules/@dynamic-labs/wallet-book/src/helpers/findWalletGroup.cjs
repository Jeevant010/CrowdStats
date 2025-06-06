'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletGroup = require('./getWalletGroup.cjs');
var logger = require('./logger.cjs');

const findWalletGroup = (walletBook, walletGroup) => {
    try {
        return getWalletGroup.getWalletGroup(walletBook, walletGroup);
    }
    catch (err) {
        logger.logger.error(err);
        return undefined;
    }
};

exports.findWalletGroup = findWalletGroup;
