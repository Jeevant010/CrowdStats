'use client'
import { isMobile } from '@dynamic-labs/utils';

const walletsRequiringTwoStepAuthentication = ['dapper'];
const requiresTwoStepAuthentication = (connector) => (isMobile() && !(connector === null || connector === void 0 ? void 0 : connector.canConnectViaCustodialService)) ||
    walletsRequiringTwoStepAuthentication.includes((connector === null || connector === void 0 ? void 0 : connector.key) || '');

export { requiresTwoStepAuthentication };
