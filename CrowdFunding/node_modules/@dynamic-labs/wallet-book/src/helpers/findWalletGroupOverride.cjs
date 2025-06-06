'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findWalletGroup = require('./findWalletGroup.cjs');

const findWalletGroupOverride = (walletBook, groupKey, walletKey) => {
    var _a;
    const group = findWalletGroup.findWalletGroup(walletBook, groupKey);
    return (_a = group === null || group === void 0 ? void 0 : group.walletOverrides) === null || _a === void 0 ? void 0 : _a[walletKey];
};

exports.findWalletGroupOverride = findWalletGroupOverride;
