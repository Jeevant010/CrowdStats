'use client'
const getWalletGroup = (walletBook, key) => {
    const group = walletBook.groups[key];
    if (!group)
        throw new Error(`Group ${key} not found in wallet book`);
    return group;
};

export { getWalletGroup };
