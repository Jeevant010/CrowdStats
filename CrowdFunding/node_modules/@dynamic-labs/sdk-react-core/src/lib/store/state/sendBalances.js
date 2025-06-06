'use client'
import { createPartialStoreSetter } from '../internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.js';
import { createStoreState } from '../internalImplementation/utils/createStoreState/createStoreState.js';

const { getSendBalanceState, setSendBalanceState, useSendBalanceState, resetSendBalanceState, } = createStoreState('sendBalanceState');
const setSendBalanceVariable = createPartialStoreSetter({
    get: getSendBalanceState,
    set: setSendBalanceState,
});

export { getSendBalanceState, resetSendBalanceState, setSendBalanceState, setSendBalanceVariable, useSendBalanceState };
