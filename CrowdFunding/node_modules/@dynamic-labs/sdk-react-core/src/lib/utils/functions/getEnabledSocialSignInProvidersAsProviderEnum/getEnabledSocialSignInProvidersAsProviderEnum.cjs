'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getProviderEnumForSocialSignInProvider = require('../getProviderEnumForSocialSignInProvider/getProviderEnumForSocialSignInProvider.cjs');

const getEnabledSocialSignInProvidersAsProviderEnum = (providers) => {
    if (!providers)
        return [];
    const enabledProviders = [];
    for (const provider of providers) {
        const matchingProviderEnum = getProviderEnumForSocialSignInProvider.getProviderEnumForSocialSignInProvider(provider.provider);
        if (matchingProviderEnum && provider.enabled) {
            enabledProviders.push(matchingProviderEnum);
        }
    }
    return enabledProviders;
};

exports.getEnabledSocialSignInProvidersAsProviderEnum = getEnabledSocialSignInProvidersAsProviderEnum;
