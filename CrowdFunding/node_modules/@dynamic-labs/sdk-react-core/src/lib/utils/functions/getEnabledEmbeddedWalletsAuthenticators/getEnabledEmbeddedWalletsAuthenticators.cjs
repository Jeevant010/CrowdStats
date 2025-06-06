'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.getEnabledEmbeddedWalletsAuthenticators = getEnabledEmbeddedWalletsAuthenticators;
