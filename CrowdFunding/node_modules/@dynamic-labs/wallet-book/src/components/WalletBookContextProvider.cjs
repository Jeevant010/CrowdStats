'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var WalletBookContext = require('../context/WalletBookContext.cjs');

const WalletBookContextProvider = ({ walletBook, children, }) => react.createElement(WalletBookContext.WalletBookContext.Provider, {
    value: { walletBook },
}, children);

exports.WalletBookContextProvider = WalletBookContextProvider;
