'use client'
const getEnabledOAuthProviders = (providers) => {
    var _a;
    return (_a = providers === null || providers === void 0 ? void 0 : providers.filter(({ enabledAt, authorizationUrl, redirectUrl }) => Boolean(enabledAt) && Boolean(authorizationUrl) && Boolean(redirectUrl))) !== null && _a !== void 0 ? _a : [];
};

export { getEnabledOAuthProviders };
