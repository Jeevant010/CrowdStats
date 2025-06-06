'use client'
// verifies if user has any type of wallet by checking if walletProvider is present
// as walletProvider is only present in VC wallets
const getUserWalletsFromVerifiedCredentials = (user) => {
    var _a;
    return (_a = user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter(
    // Only wallets has walletProviders
    ({ walletProvider }) => walletProvider);
};

export { getUserWalletsFromVerifiedCredentials };
