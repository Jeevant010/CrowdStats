'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const hasPendingMfaAction = (user) => {
    var _a;
    return ((_a = user.scope) === null || _a === void 0 ? void 0 : _a.includes('requiresAdditionalAuth')) ||
        user.mfaBackupCodeAcknowledgement === sdkApiCore.MfaBackupCodeAcknowledgement.Pending;
};

exports.hasPendingMfaAction = hasPendingMfaAction;
