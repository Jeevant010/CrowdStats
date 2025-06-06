'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const getApiProviders = (providers) => Object.values(sdkApiCore.ProviderEnum).reduce((acc, provider) => {
    const foundProvider = providers.find((providerSetting) => providerSetting.provider === provider);
    if (foundProvider) {
        acc[provider] = foundProvider;
    }
    return acc;
}, {});

exports.getApiProviders = getApiProviders;
