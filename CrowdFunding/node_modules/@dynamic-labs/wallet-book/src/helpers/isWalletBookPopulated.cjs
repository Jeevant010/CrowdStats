'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isWalletBookPopulated = (walletBook) => { var _a; return Object.keys((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).length > 0; };

exports.isWalletBookPopulated = isWalletBookPopulated;
