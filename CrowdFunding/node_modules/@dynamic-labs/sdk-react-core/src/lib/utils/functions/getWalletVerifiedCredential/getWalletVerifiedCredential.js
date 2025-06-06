'use client'
import { isSameAddress } from '@dynamic-labs/wallet-connector-core';

const getWalletVerifiedCredential = (walletAddress, verifiedCredentials, walletChain) => verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ address }) => isSameAddress(address || '', walletAddress || '', walletChain));

export { getWalletVerifiedCredential };
