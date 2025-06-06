'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var isProviderEnabled = require('../isProviderEnabled/isProviderEnabled.cjs');

const isEmailProviderEnabled = (providers) => providers !== undefined &&
    (isProviderEnabled.isProviderEnabled(providers, sdkApiCore.ProviderEnum.Dynamic) ||
        isProviderEnabled.isProviderEnabled(providers, sdkApiCore.ProviderEnum.Blocto) ||
        isProviderEnabled.isProviderEnabled(providers, sdkApiCore.ProviderEnum.MagicLink));

exports.isEmailProviderEnabled = isEmailProviderEnabled;
