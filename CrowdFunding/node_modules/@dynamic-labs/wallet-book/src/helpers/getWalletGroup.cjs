'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getWalletGroup = (walletBook, key) => {
    const group = walletBook.groups[key];
    if (!group)
        throw new Error(`Group ${key} not found in wallet book`);
    return group;
};

exports.getWalletGroup = getWalletGroup;
