'use client'
import { ProviderEnum } from '@dynamic-labs/sdk-api-core';
import { isProviderEnabled } from '../isProviderEnabled/isProviderEnabled.js';

const isTurnkeyEnabled = (projectSettings) => { var _a; return isProviderEnabled((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], ProviderEnum.Turnkey); };

export { isTurnkeyEnabled };
