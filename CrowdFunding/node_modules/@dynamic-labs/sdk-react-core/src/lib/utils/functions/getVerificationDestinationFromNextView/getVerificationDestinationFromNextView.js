'use client'
import { NextViewEnum } from '@dynamic-labs/sdk-api-core';

const getVerificationDestinationFromNextView = (nextView) => {
    if (nextView === NextViewEnum.VerifyEmail)
        return 'email';
    if (nextView === NextViewEnum.VerifySms)
        return 'sms';
    return undefined;
};

export { getVerificationDestinationFromNextView };
