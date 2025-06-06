'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * This will return a string which we can present to the user credential type
 * @param user
 * @param type optional parameter to check for specific credential type
 * @returns JwtVerifiedCredentialFormatEnum | undefined
 */
const getUserVerifiedCredentialType = (user, type) => {
    var _a, _b, _c;
    if (!user) {
        return undefined;
    }
    if (type) {
        return (_b = (_a = user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find((credentials) => credentials.format === type)) === null || _b === void 0 ? void 0 : _b.format;
    }
    const verifiedCredential = (_c = user.verifiedCredentials) === null || _c === void 0 ? void 0 : _c.find((credentials) => credentials.id === user.lastVerifiedCredentialId);
    return verifiedCredential === null || verifiedCredential === void 0 ? void 0 : verifiedCredential.format;
};

exports.getUserVerifiedCredentialType = getUserVerifiedCredentialType;
