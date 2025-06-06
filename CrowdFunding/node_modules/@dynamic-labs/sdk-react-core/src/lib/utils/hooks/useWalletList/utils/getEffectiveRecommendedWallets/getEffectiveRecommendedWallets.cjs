'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getEffectiveRecommendedWallets = (selectedTabSettings, recommendedWallets) => {
    if (selectedTabSettings && (selectedTabSettings === null || selectedTabSettings === void 0 ? void 0 : selectedTabSettings.recommendedWallets)) {
        return selectedTabSettings.recommendedWallets;
    }
    return recommendedWallets;
};

exports.getEffectiveRecommendedWallets = getEffectiveRecommendedWallets;
