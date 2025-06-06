'use client'
const isGlobalWalletPopup = () => typeof window !== 'undefined' && window.isGlobalWalletPopup;

export { isGlobalWalletPopup };
