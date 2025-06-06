'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletBookWallet = require('./getWalletBookWallet.cjs');
var getBrandIconUrl = require('./getBrandIconUrl.cjs');
var logger = require('./logger.cjs');
var renderTemplate = require('./renderTemplate.cjs');

const getWalletIconUrl = (walletBook, walletKey) => {
    try {
        const walletData = getWalletBookWallet.getWalletBookWallet(walletBook, walletKey);
        if (walletData === null || walletData === void 0 ? void 0 : walletData.brand) {
            return getBrandIconUrl.getBrandIconUrl(walletData.brand);
        }
    }
    catch (err) {
        logger.logger.error(err);
    }
    return '';
};
const getDefaultWalletIconUrl = () => {
    try {
        return renderTemplate.renderTemplate('iconicUrl', 'defaultwallet');
    }
    catch (err) {
        logger.logger.error(err);
    }
    return '';
};

exports.getDefaultWalletIconUrl = getDefaultWalletIconUrl;
exports.getWalletIconUrl = getWalletIconUrl;
