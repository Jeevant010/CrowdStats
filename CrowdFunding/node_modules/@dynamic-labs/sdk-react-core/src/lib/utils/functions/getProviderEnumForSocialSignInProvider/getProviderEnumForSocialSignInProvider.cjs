'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const getProviderEnumForSocialSignInProvider = (provider) => {
    if (!provider)
        return null;
    const values = Object.values(sdkApiCore.ProviderEnum);
    for (const value of values) {
        if (value === provider) {
            return value;
        }
    }
    return null;
};

exports.getProviderEnumForSocialSignInProvider = getProviderEnumForSocialSignInProvider;
