'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const WalletBookContext = react.createContext(undefined);
const useWalletBookContext = () => {
    const context = react.useContext(WalletBookContext);
    if (context === undefined) {
        throw new Error('useWalletBookContext must be used within a WalletBookContextProvider');
    }
    return context;
};

exports.WalletBookContext = WalletBookContext;
exports.useWalletBookContext = useWalletBookContext;
