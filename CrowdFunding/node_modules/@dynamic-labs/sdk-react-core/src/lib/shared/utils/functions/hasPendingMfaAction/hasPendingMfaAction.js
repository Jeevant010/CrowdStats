'use client'
import { MfaBackupCodeAcknowledgement } from '@dynamic-labs/sdk-api-core';

const hasPendingMfaAction = (user) => {
    var _a;
    return ((_a = user.scope) === null || _a === void 0 ? void 0 : _a.includes('requiresAdditionalAuth')) ||
        user.mfaBackupCodeAcknowledgement === MfaBackupCodeAcknowledgement.Pending;
};

export { hasPendingMfaAction };
