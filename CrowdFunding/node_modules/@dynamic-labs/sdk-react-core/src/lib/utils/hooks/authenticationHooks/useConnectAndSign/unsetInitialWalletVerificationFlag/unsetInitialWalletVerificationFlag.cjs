'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dynamicEvents = require('../../../../../events/dynamicEvents.cjs');
var loadingAndLifecycle = require('../../../../../store/state/loadingAndLifecycle/loadingAndLifecycle.cjs');

/**
 * The max time the SDK will wait before unsetting the initial wallet verification flag.
 * If the corresponding walletAdded event is triggered before this timeout, the flag will be unset immediately.
 *
 * See justification for this in comments where it is being called.
 */
const UNSET_TIMEOUT = 5500;
const unsetInitialWalletVerificationFlag = () => {
    loadingAndLifecycle.setIsInitialWalletVerificationInProgress(false);
};
const unsetInitialWalletVerificationFlagWithTimeout = () => {
    const timeout = setTimeout(() => {
        unsetInitialWalletVerificationFlag();
        clearTimeout(timeout);
        dynamicEvents.dynamicEvents.removeListener('walletAdded', unsetInitialWalletVerificationFlag);
    }, UNSET_TIMEOUT);
};

exports.UNSET_TIMEOUT = UNSET_TIMEOUT;
exports.unsetInitialWalletVerificationFlag = unsetInitialWalletVerificationFlag;
exports.unsetInitialWalletVerificationFlagWithTimeout = unsetInitialWalletVerificationFlagWithTimeout;
