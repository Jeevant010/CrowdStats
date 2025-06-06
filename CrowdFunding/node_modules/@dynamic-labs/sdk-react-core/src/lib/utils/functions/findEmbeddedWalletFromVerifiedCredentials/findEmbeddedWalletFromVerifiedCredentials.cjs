'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var values = require('../../constants/values.cjs');

/**
 * Finds the first embedded wallet from the verified credentials for the given chains.
 * If the user doesn't have embedded wallet for the chain, it will return the first embedded wallet for other chains.
 * @param user - The user profile.
 * @param chains - The chains to check for embedded wallets.
 * @returns The first embedded wallet from the verified credentials for the given chains.
 */
const findEmbeddedWalletFromVerifiedCredentials = (user, chains) => {
    var _a;
    const verifiedCredentials = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter(({ walletProvider }) => walletProvider === sdkApiCore.WalletProviderEnum.EmbeddedWallet);
    let firstVerifiedCredential;
    if ((verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.length) && (chains === null || chains === void 0 ? void 0 : chains.length)) {
        firstVerifiedCredential = verifiedCredentials.find(({ chain }) => chain && chains.includes(values.VerifiedCredentialNameToChainEnum[chain]));
    }
    return firstVerifiedCredential || (verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.shift());
};

exports.findEmbeddedWalletFromVerifiedCredentials = findEmbeddedWalletFromVerifiedCredentials;
