'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';

const isProviderEnabled = (providers, provider) => providers.some((providerItem) => {
    const providerEnabled = providerItem.provider === provider && Boolean(providerItem.enabledAt);
    if (providerItem.provider === ProviderEnum.MagicLink) {
        return providerEnabled && Boolean(providerItem.providerProjectId);
    }
    return providerEnabled;
});

export { isProviderEnabled };
