'use client'
import { findWalletGroup } from './findWalletGroup.js';

const findWalletGroupOverride = (walletBook, groupKey, walletKey) => {
    var _a;
    const group = findWalletGroup(walletBook, groupKey);
    return (_a = group === null || group === void 0 ? void 0 : group.walletOverrides) === null || _a === void 0 ? void 0 : _a[walletKey];
};

export { findWalletGroupOverride };
