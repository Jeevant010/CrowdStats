'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const createWalletGroupFromWalletOption = (walletOption) => {
    const { metadata } = walletOption.walletConnector;
    const { name } = metadata;
    const key = utils.sanitizeName(name);
    return {
        brand: {
            icon: metadata.icon,
            primaryColor: metadata.brandColor,
        },
        key,
        name,
    };
};

exports.createWalletGroupFromWalletOption = createWalletGroupFromWalletOption;
