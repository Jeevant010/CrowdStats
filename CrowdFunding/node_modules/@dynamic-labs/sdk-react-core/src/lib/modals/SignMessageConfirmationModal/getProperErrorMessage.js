'use client'
import { AccessBlockedError } from '@dynamic-labs/utils';
import { EmbeddedWalletVersionEnum } from '@dynamic-labs/sdk-api-core';
import { ACCESS_BLOCKED_ERROR_CODE } from '../../utils/constants/errors.js';

const TurnkeyErrorMap = (isV2Wallet = false) => ({
    0: 'Operation was canceled.',
    16: isV2Wallet
        ? 'Error processing your request. Please try again.'
        : 'Invalid Passkey signature. Select the passkey for this account and device.',
    3: 'You reached the limit of passkeys for this account.',
    5: isV2Wallet
        ? 'Error processing your request. Please try again.'
        : 'Invalid Passkey signature. Select the passkey for this account and device.',
    7: 'The code is invalid or expired.',
});
const reactNativePasskeyErrors = {
    RequestFailed: 'Request failed. Please try again.',
    UserCancelled: TurnkeyErrorMap(false)[0],
};
const DOMExceptionErrorMap = {
    NotAllowedError: 'Request Cancelled. Select a device or password manager to set up a passkey.',
};
const getProperErrorMessage = (originalError, user) => {
    var _a, _b;
    // Check if user has a V2 wallet
    const isV2Wallet = ((_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.some((credential) => { var _a; return ((_a = credential.walletProperties) === null || _a === void 0 ? void 0 : _a.version) === EmbeddedWalletVersionEnum.V2; })) || false;
    if (typeof originalError === 'string') {
        return originalError;
    }
    if ('reason' in originalError) {
        return originalError.reason;
    }
    if (originalError instanceof DOMException) {
        return DOMExceptionErrorMap[originalError.name] || 'Something went wrong';
    }
    if ('cause' in originalError) {
        if (((_b = originalError === null || originalError === void 0 ? void 0 : originalError.cause) === null || _b === void 0 ? void 0 : _b.code) !== undefined) {
            if (originalError.cause.code === ACCESS_BLOCKED_ERROR_CODE) {
                throw new AccessBlockedError();
            }
            return TurnkeyErrorMap(isV2Wallet)[originalError.cause.code];
        }
        if (originalError.cause &&
            'error' in originalError.cause &&
            typeof originalError.cause.error === 'string' &&
            reactNativePasskeyErrors[originalError.cause.error]) {
            return reactNativePasskeyErrors[originalError.cause.error];
        }
    }
    if ('code' in originalError && originalError.code) {
        if (originalError.code === ACCESS_BLOCKED_ERROR_CODE) {
            throw new AccessBlockedError();
        }
        return TurnkeyErrorMap(isV2Wallet)[originalError.code];
    }
    if ('error' in originalError &&
        typeof originalError.error === 'string' &&
        reactNativePasskeyErrors[originalError.error]) {
        return reactNativePasskeyErrors[originalError.error];
    }
    return 'Something went wrong';
};

export { getProperErrorMessage };
