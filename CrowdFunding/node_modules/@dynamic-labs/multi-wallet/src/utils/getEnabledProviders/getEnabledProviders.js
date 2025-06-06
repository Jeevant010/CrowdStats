'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';

// get list of providers enabled in the sense that we should have wallet connectors for them
// note: magic and turnkey are considered enabled when a provider exists (for magic, a providerProjectId exists)
const getEnabledProviders = (providers) => {
    var _a;
    return (_a = providers === null || providers === void 0 ? void 0 : providers.filter((provider) => Boolean(provider.enabledAt) ||
        (provider.provider === ProviderEnum.MagicLink &&
            Boolean(provider.providerProjectId)) ||
        provider.provider === ProviderEnum.Turnkey)) !== null && _a !== void 0 ? _a : [];
};

export { getEnabledProviders };
