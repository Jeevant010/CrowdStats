'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var getProviderByType = require('../getProviderByType/getProviderByType.cjs');

const getSupportedCountriesForVerificationFromProjectSettings = (projectSettings) => {
    var _a, _b;
    const smsProvider = getProviderByType.getProviderByType((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], sdkApiCore.ProviderEnum.Sms);
    return ((_b = smsProvider === null || smsProvider === void 0 ? void 0 : smsProvider.enabledCountries) !== null && _b !== void 0 ? _b : []).map((country) => country.isoCountryCode.toLowerCase());
};

exports.getSupportedCountriesForVerificationFromProjectSettings = getSupportedCountriesForVerificationFromProjectSettings;
