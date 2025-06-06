'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletBookWallet = require('./getWalletBookWallet.cjs');
var getBrandIconUrl = require('./getBrandIconUrl.cjs');
var logger = require('./logger.cjs');
var findWalletGroup = require('./findWalletGroup.cjs');

const getWalletIconData = (walletBook, walletKey, isGroup) => {
    if (!walletKey) {
        return {
            walletIconAlt: '',
            walletIconUrl: '',
        };
    }
    try {
        const walletData = isGroup
            ? findWalletGroup.findWalletGroup(walletBook, walletKey)
            : getWalletBookWallet.getWalletBookWallet(walletBook, walletKey);
        const iconData = walletData === null || walletData === void 0 ? void 0 : walletData.brand;
        if (iconData) {
            return {
                walletIconAlt: iconData.alt,
                walletIconUrl: getBrandIconUrl.getBrandIconUrl(iconData),
            };
        }
    }
    catch (err) {
        logger.logger.debug(err);
    }
    return {
        walletIconAlt: '',
        walletIconUrl: '',
    };
};

exports.getWalletIconData = getWalletIconData;
