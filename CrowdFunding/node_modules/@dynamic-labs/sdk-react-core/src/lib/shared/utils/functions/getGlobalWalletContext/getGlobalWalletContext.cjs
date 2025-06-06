'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getGlobalWalletContext = () => {
    if (typeof window === 'undefined' ||
        !window.isGlobalWalletPopup ||
        !window.globalWalletContext) {
        return {};
    }
    return window.globalWalletContext;
};

exports.getGlobalWalletContext = getGlobalWalletContext;
