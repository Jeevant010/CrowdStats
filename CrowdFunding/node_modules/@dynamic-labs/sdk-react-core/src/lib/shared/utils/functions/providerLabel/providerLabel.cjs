'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var capitalize = require('../capitalize/capitalize.cjs');

const providerLabel = (provider) => {
    if (!provider) {
        return undefined;
    }
    if (provider === sdkApiCore.SocialSignInProviderEnum.Twitter) {
        return 'X';
    }
    if (provider === sdkApiCore.SocialSignInProviderEnum.Coinbasesocial) {
        return 'Coinbase';
    }
    return capitalize.capitalize(provider);
};

exports.providerLabel = providerLabel;
