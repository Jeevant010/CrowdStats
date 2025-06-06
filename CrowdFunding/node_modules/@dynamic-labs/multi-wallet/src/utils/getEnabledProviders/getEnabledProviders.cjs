'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

// get list of providers enabled in the sense that we should have wallet connectors for them
// note: magic and turnkey are considered enabled when a provider exists (for magic, a providerProjectId exists)
const getEnabledProviders = (providers) => {
    var _a;
    return (_a = providers === null || providers === void 0 ? void 0 : providers.filter((provider) => Boolean(provider.enabledAt) ||
        (provider.provider === sdkApiCore.ProviderEnum.MagicLink &&
            Boolean(provider.providerProjectId)) ||
        provider.provider === sdkApiCore.ProviderEnum.Turnkey)) !== null && _a !== void 0 ? _a : [];
};

exports.getEnabledProviders = getEnabledProviders;
