'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getEffectiveWalletFilter = (selectedTabSettings, walletsFilter) => {
    if (selectedTabSettings && (selectedTabSettings === null || selectedTabSettings === void 0 ? void 0 : selectedTabSettings.walletsFilter)) {
        return selectedTabSettings.walletsFilter;
    }
    return walletsFilter;
};

exports.getEffectiveWalletFilter = getEffectiveWalletFilter;
