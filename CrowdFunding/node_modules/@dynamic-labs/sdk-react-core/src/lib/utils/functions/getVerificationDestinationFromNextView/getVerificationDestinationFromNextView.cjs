'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');

const getVerificationDestinationFromNextView = (nextView) => {
    if (nextView === sdkApiCore.NextViewEnum.VerifyEmail)
        return 'email';
    if (nextView === sdkApiCore.NextViewEnum.VerifySms)
        return 'sms';
    return undefined;
};

exports.getVerificationDestinationFromNextView = getVerificationDestinationFromNextView;
