'use client'
import { getWalletBookWallet } from './getWalletBookWallet.js';
import { getBrandIconUrl } from './getBrandIconUrl.js';
import { logger } from './logger.js';
import { findWalletGroup } from './findWalletGroup.js';

const getWalletIconData = (walletBook, walletKey, isGroup) => {
    if (!walletKey) {
        return {
            walletIconAlt: '',
            walletIconUrl: '',
        };
    }
    try {
        const walletData = isGroup
            ? findWalletGroup(walletBook, walletKey)
            : getWalletBookWallet(walletBook, walletKey);
        const iconData = walletData === null || walletData === void 0 ? void 0 : walletData.brand;
        if (iconData) {
            return {
                walletIconAlt: iconData.alt,
                walletIconUrl: getBrandIconUrl(iconData),
            };
        }
    }
    catch (err) {
        logger.debug(err);
    }
    return {
        walletIconAlt: '',
        walletIconUrl: '',
    };
};

export { getWalletIconData };
