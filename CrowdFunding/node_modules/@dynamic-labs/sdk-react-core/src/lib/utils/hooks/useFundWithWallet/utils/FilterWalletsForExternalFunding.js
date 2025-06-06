'use client'
import { isMobile } from '@dynamic-labs/utils';

const SPECIFIC_WALLETS_WITHOUT_REDIRECTS = [
    'coinbase',
    'phantomevm',
    'magiceden',
];
const FilterWalletsForExternalFunding = (wallets) => {
    if (!isMobile()) {
        return wallets;
    }
    return wallets.filter((wallet) => {
        if (SPECIFIC_WALLETS_WITHOUT_REDIRECTS.includes(wallet.key)) {
            return false;
        }
        const mobileCondition = wallet.walletConnector.isWalletConnect ||
            wallet.walletConnector.mobileExperience !== 'in-app-browser';
        return mobileCondition;
    });
};

export { FilterWalletsForExternalFunding };
