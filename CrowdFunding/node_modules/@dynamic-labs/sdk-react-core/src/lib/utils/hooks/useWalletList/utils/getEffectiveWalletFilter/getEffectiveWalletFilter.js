'use client'
const getEffectiveWalletFilter = (selectedTabSettings, walletsFilter) => {
    if (selectedTabSettings && (selectedTabSettings === null || selectedTabSettings === void 0 ? void 0 : selectedTabSettings.walletsFilter)) {
        return selectedTabSettings.walletsFilter;
    }
    return walletsFilter;
};

export { getEffectiveWalletFilter };
