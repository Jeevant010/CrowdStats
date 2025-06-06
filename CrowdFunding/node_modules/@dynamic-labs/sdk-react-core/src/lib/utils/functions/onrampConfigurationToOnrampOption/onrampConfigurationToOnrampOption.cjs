'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../onrampProviders/index.cjs');

/**
 * Converts an OnrampConfiguration to an OnrampOption based on the provider's display mode
 */
const onrampConfigurationToOnrampOption = (provider) => {
    var _a, _b, _c, _d;
    // Determine if this provider uses popup or iframe mode
    const providerKey = provider.provider;
    const openMode = (_a = index.providerDisplayModes[providerKey]) !== null && _a !== void 0 ? _a : 'iframe';
    return {
        displayName: (_c = (_b = provider.name) !== null && _b !== void 0 ? _b : provider.provider) !== null && _c !== void 0 ? _c : '',
        iconUrl: (_d = provider.iconUrl) !== null && _d !== void 0 ? _d : '',
        id: String(provider.provider),
        openMode,
        url: provider.url,
    };
};

exports.onrampConfigurationToOnrampOption = onrampConfigurationToOnrampOption;
