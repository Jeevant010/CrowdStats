'use client'
import { getWalletBookWallet } from './getWalletBookWallet.js';
import { getBrandIconUrl } from './getBrandIconUrl.js';
import { logger } from './logger.js';
import { renderTemplate } from './renderTemplate.js';

const getWalletIconUrl = (walletBook, walletKey) => {
    try {
        const walletData = getWalletBookWallet(walletBook, walletKey);
        if (walletData === null || walletData === void 0 ? void 0 : walletData.brand) {
            return getBrandIconUrl(walletData.brand);
        }
    }
    catch (err) {
        logger.error(err);
    }
    return '';
};
const getDefaultWalletIconUrl = () => {
    try {
        return renderTemplate('iconicUrl', 'defaultwallet');
    }
    catch (err) {
        logger.error(err);
    }
    return '';
};

export { getDefaultWalletIconUrl, getWalletIconUrl };
