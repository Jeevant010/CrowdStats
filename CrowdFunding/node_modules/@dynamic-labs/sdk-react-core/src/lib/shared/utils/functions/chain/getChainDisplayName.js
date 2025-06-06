'use client'
import { getChainInfoWithOverrides } from '@dynamic-labs/wallet-connector-core';
import { logger } from '../../../logger.js';

const getChainDisplayName = (chain) => {
    var _a;
    const displayName = (_a = getChainInfoWithOverrides(chain)) === null || _a === void 0 ? void 0 : _a.displayName;
    if (!displayName) {
        logger.error(`Chain name for "${chain}" not supported`);
        return chain;
    }
    return displayName;
};

export { getChainDisplayName };
