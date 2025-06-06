'use client'
import { createElement } from 'react';
import { WalletBookContext } from '../context/WalletBookContext.js';

const WalletBookContextProvider = ({ walletBook, children, }) => createElement(WalletBookContext.Provider, {
    value: { walletBook },
}, children);

export { WalletBookContextProvider };
