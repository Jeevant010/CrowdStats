'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';

const getApiProviders = (providers) => Object.values(ProviderEnum).reduce((acc, provider) => {
    const foundProvider = providers.find((providerSetting) => providerSetting.provider === provider);
    if (foundProvider) {
        acc[provider] = foundProvider;
    }
    return acc;
}, {});

export { getApiProviders };
