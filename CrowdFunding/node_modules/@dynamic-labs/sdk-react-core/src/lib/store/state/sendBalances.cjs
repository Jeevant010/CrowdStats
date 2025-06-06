'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createPartialStoreSetter = require('../internalImplementation/utils/createPartialStoreSetter/createPartialStoreSetter.cjs');
var createStoreState = require('../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getSendBalanceState, setSendBalanceState, useSendBalanceState, resetSendBalanceState, } = createStoreState.createStoreState('sendBalanceState');
const setSendBalanceVariable = createPartialStoreSetter.createPartialStoreSetter({
    get: getSendBalanceState,
    set: setSendBalanceState,
});

exports.getSendBalanceState = getSendBalanceState;
exports.resetSendBalanceState = resetSendBalanceState;
exports.setSendBalanceState = setSendBalanceState;
exports.setSendBalanceVariable = setSendBalanceVariable;
exports.useSendBalanceState = useSendBalanceState;
