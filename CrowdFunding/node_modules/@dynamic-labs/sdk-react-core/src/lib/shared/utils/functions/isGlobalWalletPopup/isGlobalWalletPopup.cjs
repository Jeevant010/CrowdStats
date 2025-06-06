'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isGlobalWalletPopup = () => typeof window !== 'undefined' && window.isGlobalWalletPopup;

exports.isGlobalWalletPopup = isGlobalWalletPopup;
