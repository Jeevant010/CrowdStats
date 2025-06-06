'use client'
const lastAuthenticatedAccount = (dynamicJwtOrUser) => dynamicJwtOrUser.verifiedCredentials.find((account) => account.id === dynamicJwtOrUser.lastVerifiedCredentialId);

export { lastAuthenticatedAccount };
