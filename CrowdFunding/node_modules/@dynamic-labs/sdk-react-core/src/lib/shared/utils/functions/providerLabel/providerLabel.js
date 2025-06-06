'use client'
import { SocialSignInProviderEnum } from '@dynamic-labs/sdk-api-core';
import { capitalize } from '../capitalize/capitalize.js';

const providerLabel = (provider) => {
    if (!provider) {
        return undefined;
    }
    if (provider === SocialSignInProviderEnum.Twitter) {
        return 'X';
    }
    if (provider === SocialSignInProviderEnum.Coinbasesocial) {
        return 'Coinbase';
    }
    return capitalize(provider);
};

export { providerLabel };
