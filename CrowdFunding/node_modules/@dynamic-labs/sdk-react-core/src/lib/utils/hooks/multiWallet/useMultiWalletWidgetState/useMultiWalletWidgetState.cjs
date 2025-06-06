'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useAwaitingAccountSwitch = require('./substates/useAwaitingAccountSwitch.cjs');
var useAwaitingSignature = require('./substates/useAwaitingSignature.cjs');

const validTransitions = {
    awaiting_account_switch: ['awaiting_signature', 'idle'],
    awaiting_connection: ['idle'],
    awaiting_signature: ['idle'],
    detected_new_wallet: ['awaiting_signature', 'idle'],
    idle: [
        'awaiting_account_switch',
        'awaiting_connection',
        'awaiting_signature',
        'detected_new_wallet',
    ],
};
const validateStateTransition = ({ from, to, }) => {
    if (from !== to && !validTransitions[from].includes(to)) {
        throw new Error(`Invalid MultiWalletWidget state transition from ${from} to ${to}`);
    }
    return true;
};
const useMultiWalletWidgetState = () => {
    const [multiWalletWidgetState, setCoreMultiWalletWidgetState] = React.useState('idle');
    const [accountSwitchState, setAccountSwitchState, resetAccountSwitchState] = useAwaitingAccountSwitch.useAwaitingAccountSwitch();
    const [awaitingSignatureState, setAwaitingSignatureState, resetAwaitingSignatureState,] = useAwaitingSignature.useAwaitingSignature();
    const resetSubStates = React.useCallback(() => {
        resetAccountSwitchState();
        resetAwaitingSignatureState();
    }, [resetAccountSwitchState, resetAwaitingSignatureState]);
    const setMultiWalletWidgetState = React.useCallback((newWidgetState, newAccountSwitchState, newAwaitingSignatureState) => {
        validateStateTransition({
            from: multiWalletWidgetState,
            to: newWidgetState,
        });
        setCoreMultiWalletWidgetState(newWidgetState);
        resetSubStates();
        if (newAccountSwitchState) {
            setAccountSwitchState(newAccountSwitchState, newWidgetState);
        }
        if (newAwaitingSignatureState) {
            setAwaitingSignatureState(newAwaitingSignatureState, newWidgetState);
        }
    }, [
        multiWalletWidgetState,
        resetSubStates,
        setAccountSwitchState,
        setAwaitingSignatureState,
    ]);
    return [
        multiWalletWidgetState,
        setMultiWalletWidgetState,
        {
            awaiting_account_switch: [accountSwitchState, setAccountSwitchState],
            awaiting_signature: [awaitingSignatureState, setAwaitingSignatureState],
        },
    ];
};

exports.useMultiWalletWidgetState = useMultiWalletWidgetState;
