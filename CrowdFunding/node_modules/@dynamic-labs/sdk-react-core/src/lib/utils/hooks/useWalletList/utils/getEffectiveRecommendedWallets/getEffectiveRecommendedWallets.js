'use client'
const getEffectiveRecommendedWallets = (selectedTabSettings, recommendedWallets) => {
    if (selectedTabSettings && (selectedTabSettings === null || selectedTabSettings === void 0 ? void 0 : selectedTabSettings.recommendedWallets)) {
        return selectedTabSettings.recommendedWallets;
    }
    return recommendedWallets;
};

export { getEffectiveRecommendedWallets };
