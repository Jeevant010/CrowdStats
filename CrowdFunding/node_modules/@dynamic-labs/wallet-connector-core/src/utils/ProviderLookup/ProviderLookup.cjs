'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ProviderLookup = (installedProviders, extensionLocators) => {
    if (extensionLocators.length === 0) {
        return undefined;
    }
    return installedProviders.find((provider) => {
        const extensionLocatorMatch = extensionLocators.every((condition) => {
            const flagValue = (provider === null || provider === void 0 ? void 0 : provider[condition.flag]) || false;
            return flagValue === condition.value;
        });
        return extensionLocatorMatch === true;
    });
};

exports.ProviderLookup = ProviderLookup;
