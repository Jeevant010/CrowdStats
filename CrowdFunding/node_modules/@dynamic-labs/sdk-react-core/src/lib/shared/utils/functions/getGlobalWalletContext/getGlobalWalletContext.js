'use client'
const getGlobalWalletContext = () => {
    if (typeof window === 'undefined' ||
        !window.isGlobalWalletPopup ||
        !window.globalWalletContext) {
        return {};
    }
    return window.globalWalletContext;
};

export { getGlobalWalletContext };
