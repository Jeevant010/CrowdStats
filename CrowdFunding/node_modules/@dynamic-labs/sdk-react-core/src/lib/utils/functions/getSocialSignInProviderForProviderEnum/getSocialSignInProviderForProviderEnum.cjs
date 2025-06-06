'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const getSocialSignInProviderForProviderEnum = (provider) => {
    if (!provider)
        return;
    const values = Object.values(sdkApiCore.SocialSignInProviderEnum);
    for (const value of values) {
        if (value === provider) {
            return value;
        }
    }
    return undefined;
};

exports.getSocialSignInProviderForProviderEnum = getSocialSignInProviderForProviderEnum;
