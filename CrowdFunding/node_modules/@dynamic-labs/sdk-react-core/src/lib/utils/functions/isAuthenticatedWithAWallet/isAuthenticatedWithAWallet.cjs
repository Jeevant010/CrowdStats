'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const isAuthenticatedWithAWallet = (user) => {
    const lastVerifiedCredential = user.verifiedCredentials.find((vc) => vc.id === user.lastVerifiedCredentialId);
    return ((lastVerifiedCredential === null || lastVerifiedCredential === void 0 ? void 0 : lastVerifiedCredential.format) ===
        sdkApiCore.JwtVerifiedCredentialFormatEnum.Blockchain);
};

exports.isAuthenticatedWithAWallet = isAuthenticatedWithAWallet;
