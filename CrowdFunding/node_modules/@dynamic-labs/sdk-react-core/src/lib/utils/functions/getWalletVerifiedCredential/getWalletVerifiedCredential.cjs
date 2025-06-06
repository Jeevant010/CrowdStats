'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const getWalletVerifiedCredential = (walletAddress, verifiedCredentials, walletChain) => verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ address }) => walletConnectorCore.isSameAddress(address || '', walletAddress || '', walletChain));

exports.getWalletVerifiedCredential = getWalletVerifiedCredential;
