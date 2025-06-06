'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createStoreState = require('../../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getLoadingAndLifecycle, setLoadingAndLifecycle, useLoadingAndLifecycle, } = createStoreState.createStoreState('loadingAndLifecycle');
const setIsInitialWalletVerificationInProgress = (isInitialWalletVerificationInProgress) => {
    setLoadingAndLifecycle(Object.assign(Object.assign({}, getLoadingAndLifecycle()), { initialWalletVerificationInProgress: isInitialWalletVerificationInProgress }));
};
const setSessionValidation = (sessionValidation) => {
    setLoadingAndLifecycle(Object.assign(Object.assign({}, getLoadingAndLifecycle()), { sessionValidation }));
};

exports.getLoadingAndLifecycle = getLoadingAndLifecycle;
exports.setIsInitialWalletVerificationInProgress = setIsInitialWalletVerificationInProgress;
exports.setLoadingAndLifecycle = setLoadingAndLifecycle;
exports.setSessionValidation = setSessionValidation;
exports.useLoadingAndLifecycle = useLoadingAndLifecycle;
