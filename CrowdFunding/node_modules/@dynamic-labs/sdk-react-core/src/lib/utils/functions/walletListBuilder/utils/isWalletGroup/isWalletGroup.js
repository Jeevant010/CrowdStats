'use client'
/**
 *  Check if given WalletOption is defined as a group
 *
 * @param {WalletOption} walletOption - Wallet Option
 * @returns {Boolean} - boolean value
 */
const isWalletGroup = (walletOption) => { var _a; return Boolean((_a = walletOption.groupedWallets) === null || _a === void 0 ? void 0 : _a.length); };

export { isWalletGroup };
