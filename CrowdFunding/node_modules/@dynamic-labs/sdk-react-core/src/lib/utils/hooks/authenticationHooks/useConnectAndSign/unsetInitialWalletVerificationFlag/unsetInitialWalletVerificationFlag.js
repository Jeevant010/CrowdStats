'use client'
import { dynamicEvents } from '../../../../../events/dynamicEvents.js';
import { setIsInitialWalletVerificationInProgress } from '../../../../../store/state/loadingAndLifecycle/loadingAndLifecycle.js';

/**
 * The max time the SDK will wait before unsetting the initial wallet verification flag.
 * If the corresponding walletAdded event is triggered before this timeout, the flag will be unset immediately.
 *
 * See justification for this in comments where it is being called.
 */
const UNSET_TIMEOUT = 5500;
const unsetInitialWalletVerificationFlag = () => {
    setIsInitialWalletVerificationInProgress(false);
};
const unsetInitialWalletVerificationFlagWithTimeout = () => {
    const timeout = setTimeout(() => {
        unsetInitialWalletVerificationFlag();
        clearTimeout(timeout);
        dynamicEvents.removeListener('walletAdded', unsetInitialWalletVerificationFlag);
    }, UNSET_TIMEOUT);
};

export { UNSET_TIMEOUT, unsetInitialWalletVerificationFlag, unsetInitialWalletVerificationFlagWithTimeout };
