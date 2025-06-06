'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * This takes a userWallets and connectedWallets array, and returns a new userWallets array
 * updated to match the connectedWallets array.
 * It will add any missing wallets, update properties that don't match, and remove wallets that aren't
 * in the connectedWallets and is not linked to the user.
 */
const updateUserWalletsFromConnectedWallets = (userWallets, connectedWallets) => {
    const userWalletsCopy = [...userWallets];
    /** We will use this to find wallets addresses that were removed */
    const newWalletsAddresses = new Set();
    const newWalletsChains = new Set();
    // First pass: add missing wallets and update changed properties
    for (const connectedWallet of connectedWallets) {
        newWalletsAddresses.add(connectedWallet.address);
        newWalletsChains.add(connectedWallet.chain);
        const userWallet = userWalletsCopy.find((wallet) => wallet.address === connectedWallet.address &&
            wallet.chain === connectedWallet.chain);
        // Catch new wallets
        if (!userWallet) {
            userWalletsCopy.push(connectedWallet);
        }
    }
    // This filter is to remove a wallet that was previously added to userWallets but is not present
    // among the connected wallets (it should not be removed if it's authenticated to the user tho)
    return userWalletsCopy.filter((userWallet) => 
    // Keep wallets that are still in the new list
    (newWalletsAddresses.has(userWallet.address) &&
        newWalletsChains.has(userWallet.chain)) ||
        // Or are linked to the current user
        userWallet.isAuthenticated);
};

exports.updateUserWalletsFromConnectedWallets = updateUserWalletsFromConnectedWallets;
