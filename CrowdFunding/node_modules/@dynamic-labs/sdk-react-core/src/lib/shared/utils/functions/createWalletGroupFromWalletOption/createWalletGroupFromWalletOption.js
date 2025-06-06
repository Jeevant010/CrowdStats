'use client'
import { sanitizeName } from '@dynamic-labs/utils';

const createWalletGroupFromWalletOption = (walletOption) => {
    const { metadata } = walletOption.walletConnector;
    const { name } = metadata;
    const key = sanitizeName(name);
    return {
        brand: {
            icon: metadata.icon,
            primaryColor: metadata.brandColor,
        },
        key,
        name,
    };
};

export { createWalletGroupFromWalletOption };
