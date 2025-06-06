'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { getProviderByType } from '../getProviderByType/getProviderByType.js';

const getSupportedCountriesForVerificationFromProjectSettings = (projectSettings) => {
    var _a, _b;
    const smsProvider = getProviderByType((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], ProviderEnum.Sms);
    return ((_b = smsProvider === null || smsProvider === void 0 ? void 0 : smsProvider.enabledCountries) !== null && _b !== void 0 ? _b : []).map((country) => country.isoCountryCode.toLowerCase());
};

export { getSupportedCountriesForVerificationFromProjectSettings };
