'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { isProviderEnabled } from '../isProviderEnabled/isProviderEnabled.js';

const isEmailProviderEnabled = (providers) => providers !== undefined &&
    (isProviderEnabled(providers, ProviderEnum.Dynamic) ||
        isProviderEnabled(providers, ProviderEnum.Blocto) ||
        isProviderEnabled(providers, ProviderEnum.MagicLink));

export { isEmailProviderEnabled };
