'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const isProviderEnabled = (providers, provider) => providers.some((providerItem) => {
    const providerEnabled = providerItem.provider === provider && Boolean(providerItem.enabledAt);
    if (providerItem.provider === sdkApiCore.ProviderEnum.MagicLink) {
        return providerEnabled && Boolean(providerItem.providerProjectId);
    }
    return providerEnabled;
});

exports.isProviderEnabled = isProviderEnabled;
