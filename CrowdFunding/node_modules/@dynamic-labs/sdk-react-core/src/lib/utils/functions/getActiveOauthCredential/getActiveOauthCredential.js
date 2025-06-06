'use client'
const getActiveOauthCredential = (user) => {
    var _a;
    return (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find((credentials) => credentials.format === 'oauth' &&
        credentials.id === user.lastVerifiedCredentialId);
};

export { getActiveOauthCredential };
