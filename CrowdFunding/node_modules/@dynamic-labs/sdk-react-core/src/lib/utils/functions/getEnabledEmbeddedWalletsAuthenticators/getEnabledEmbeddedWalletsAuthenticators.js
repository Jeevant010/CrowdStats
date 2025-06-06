'use client'
const getEnabledEmbeddedWalletsAuthenticators = (supportedSecurityMethods) => {
    if (!supportedSecurityMethods ||
        !Object.keys(supportedSecurityMethods).length) {
        return {};
    }
    const enabledSecurityMethods = {};
    Object.keys(supportedSecurityMethods)
        .filter((key) => { var _a; return (_a = supportedSecurityMethods[key]) === null || _a === void 0 ? void 0 : _a.isEnabled; })
        .forEach((key) => (enabledSecurityMethods[key] =
        supportedSecurityMethods[key]));
    return enabledSecurityMethods;
};

export { getEnabledEmbeddedWalletsAuthenticators };
