'use client'
import { getProviderEnumForSocialSignInProvider } from '../getProviderEnumForSocialSignInProvider/getProviderEnumForSocialSignInProvider.js';

const getEnabledSocialSignInProvidersAsProviderEnum = (providers) => {
    if (!providers)
        return [];
    const enabledProviders = [];
    for (const provider of providers) {
        const matchingProviderEnum = getProviderEnumForSocialSignInProvider(provider.provider);
        if (matchingProviderEnum && provider.enabled) {
            enabledProviders.push(matchingProviderEnum);
        }
    }
    return enabledProviders;
};

export { getEnabledSocialSignInProvidersAsProviderEnum };
