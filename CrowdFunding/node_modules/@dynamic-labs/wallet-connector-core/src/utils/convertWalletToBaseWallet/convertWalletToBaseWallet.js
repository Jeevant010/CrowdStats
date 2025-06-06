'use client'
const convertWalletToBaseWallet = (wallet) => ({
    additionalAddresses: wallet.additionalAddresses,
    address: wallet.address,
    chain: wallet.chain,
    id: wallet.id,
    isAuthenticated: wallet.isAuthenticated,
    key: wallet.key,
});
const convertWalletToBaseWalletPartial = (wallet) => ({
    additionalAddresses: wallet.additionalAddresses,
    address: wallet.address,
    chain: wallet.chain,
    id: wallet.id,
    isAuthenticated: wallet.isAuthenticated,
    key: wallet.key,
});

export { convertWalletToBaseWallet, convertWalletToBaseWalletPartial };
