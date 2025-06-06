'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isEthereumWallet = (wallet) => wallet.chain === 'EVM';

exports.isEthereumWallet = isEthereumWallet;
