'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const lastAuthenticatedAccount = (dynamicJwtOrUser) => dynamicJwtOrUser.verifiedCredentials.find((account) => account.id === dynamicJwtOrUser.lastVerifiedCredentialId);

exports.lastAuthenticatedAccount = lastAuthenticatedAccount;
