'use client'
import { createPartialStoreSetter } from '../internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js';
import { createStoreState } from '../internalImplementation/utils/createStoreState/createStoreState.js';

const { getTokenBalancesState, setTokenBalancesState, useTokenBalancesState } = createStoreState('tokenBalancesState');
const setTokenBalanceVariable = createPartialStoreSetter({
    get: getTokenBalancesState,
    set: setTokenBalancesState,
});

export { getTokenBalancesState, setTokenBalanceVariable, useTokenBalancesState };
