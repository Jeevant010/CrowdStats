'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';

const getProviderEnumForSocialSignInProvider = (provider) => {
    if (!provider)
        return null;
    const values = Object.values(ProviderEnum);
    for (const value of values) {
        if (value === provider) {
            return value;
        }
    }
    return null;
};

export { getProviderEnumForSocialSignInProvider };
