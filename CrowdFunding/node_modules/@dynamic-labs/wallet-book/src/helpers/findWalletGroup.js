'use client'
import { getWalletGroup } from './getWalletGroup.js';
import { logger } from './logger.js';

const findWalletGroup = (walletBook, walletGroup) => {
    try {
        return getWalletGroup(walletBook, walletGroup);
    }
    catch (err) {
        logger.error(err);
        return undefined;
    }
};

export { findWalletGroup };
