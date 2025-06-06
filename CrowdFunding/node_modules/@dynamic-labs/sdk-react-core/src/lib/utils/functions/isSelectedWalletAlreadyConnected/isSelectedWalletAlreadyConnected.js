'use client'
const isSelectedWalletAlreadyConnected = (linkedWallets, selectedWallet, user) => {
    if (!user)
        return false;
    return linkedWallets
        .map(({ connector }) => connector.key)
        .includes(selectedWallet.key);
};

export { isSelectedWalletAlreadyConnected };
