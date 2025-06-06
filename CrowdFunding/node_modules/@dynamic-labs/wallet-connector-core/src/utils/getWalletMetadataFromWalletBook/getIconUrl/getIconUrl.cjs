'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletBook = require('@dynamic-labs/wallet-book');

const getIconUrl = (spriteId) => {
    if (!spriteId) {
        return walletBook.renderTemplate('iconicUrl', 'defaultwallet');
    }
    return walletBook.renderTemplate('iconicUrl', spriteId);
};

exports.getIconUrl = getIconUrl;
