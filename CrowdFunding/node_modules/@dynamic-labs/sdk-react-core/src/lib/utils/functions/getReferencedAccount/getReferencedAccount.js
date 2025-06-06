'use client'
/**
 * given a wallet it, this function will look through the jwt and do the following:
 * 1. find the account that matches the wallet id
 * 2. find the account that matches the refId of the account found in step 1
 * 3. return the account found in step 2. this is the referenced account
 */
const getReferencedAccount = (user, walletId) => {
    const accountForWalletId = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((account) => account.id === walletId);
    return user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((account) => account.id === (accountForWalletId === null || accountForWalletId === void 0 ? void 0 : accountForWalletId.refId));
};

export { getReferencedAccount };
