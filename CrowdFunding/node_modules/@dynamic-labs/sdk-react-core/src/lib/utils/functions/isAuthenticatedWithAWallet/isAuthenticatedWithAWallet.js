'use client'
import { JwtVerifiedCredentialFormatEnum } from '@dynamic-labs/sdk-api-core';

const isAuthenticatedWithAWallet = (user) => {
    const lastVerifiedCredential = user.verifiedCredentials.find((vc) => vc.id === user.lastVerifiedCredentialId);
    return ((lastVerifiedCredential === null || lastVerifiedCredential === void 0 ? void 0 : lastVerifiedCredential.format) ===
        JwtVerifiedCredentialFormatEnum.Blockchain);
};

export { isAuthenticatedWithAWallet };
