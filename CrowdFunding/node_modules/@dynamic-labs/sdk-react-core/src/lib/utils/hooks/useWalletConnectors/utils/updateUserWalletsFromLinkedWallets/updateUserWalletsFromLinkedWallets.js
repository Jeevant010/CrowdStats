'use client'
/**
 * This takes a userWallets and linkedWallets array, and returns a new userWallets array
 * updated to match the linkedWallets array.
 * It will add any missing wallets, update properties that don't match, and remove wallets that aren't
 * in the linkedWallets.
 */
const updateUserWalletsFromLinkedWallets = (userWallets, authenticatedWallets) => {
    const userWalletsCopy = [...userWallets];
    /** We will use this to find wallets addresses that were removed */
    const newWalletsAddresses = new Set();
    const newWalletsChains = new Set();
    // First pass: add missing wallets and update changed properties
    for (const authenticatedWallet of authenticatedWallets) {
        newWalletsAddresses.add(authenticatedWallet.address);
        newWalletsChains.add(authenticatedWallet.chain);
        const respectiveIndex = userWalletsCopy.findIndex((wallet) => wallet.address === authenticatedWallet.address &&
            wallet.chain === authenticatedWallet.chain);
        // Catch new wallets
        if (respectiveIndex === -1) {
            userWalletsCopy.push(authenticatedWallet);
            continue;
        }
        // If already present, just update to match the new state
        userWalletsCopy[respectiveIndex] = authenticatedWallet;
        // NOTE: this will actually update the wallet's ID if it changed, which happens when a wallet is signed
        // It initially has a id in the format "connected-wallet-X", and after being signed it changes to a hash
    }
    // This filter is to remove a wallet that was previously added to userWallets but is not present
    // among the verified credentials wallets anymore
    return userWalletsCopy.filter((userWallet) => newWalletsAddresses.has(userWallet.address) &&
        newWalletsChains.has(userWallet.chain));
};

export { updateUserWalletsFromLinkedWallets };
