'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createPartialStoreSetter = require('../internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.cjs');
var createStoreState = require('../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getTokenBalancesState, setTokenBalancesState, useTokenBalancesState } = createStoreState.createStoreState('tokenBalancesState');
const setTokenBalanceVariable = createPartialStoreSetter.createPartialStoreSetter({
    get: getTokenBalancesState,
    set: setTokenBalancesState,
});

exports.getTokenBalancesState = getTokenBalancesState;
exports.setTokenBalanceVariable = setTokenBalanceVariable;
exports.useTokenBalancesState = useTokenBalancesState;
