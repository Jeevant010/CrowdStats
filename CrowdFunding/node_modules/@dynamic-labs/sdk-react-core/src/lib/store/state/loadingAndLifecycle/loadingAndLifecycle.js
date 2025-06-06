'use client'
import { createStoreState } from '../../internalImplementation/utils/createStoreState/createStoreState.js';

const { getLoadingAndLifecycle, setLoadingAndLifecycle, useLoadingAndLifecycle, } = createStoreState('loadingAndLifecycle');
const setIsInitialWalletVerificationInProgress = (isInitialWalletVerificationInProgress) => {
    setLoadingAndLifecycle(Object.assign(Object.assign({}, getLoadingAndLifecycle()), { initialWalletVerificationInProgress: isInitialWalletVerificationInProgress }));
};
const setSessionValidation = (sessionValidation) => {
    setLoadingAndLifecycle(Object.assign(Object.assign({}, getLoadingAndLifecycle()), { sessionValidation }));
};

export { getLoadingAndLifecycle, setIsInitialWalletVerificationInProgress, setLoadingAndLifecycle, setSessionValidation, useLoadingAndLifecycle };
