'use client'
import { useState, useCallback } from 'react';
import { useAwaitingAccountSwitch } from './substates/useAwaitingAccountSwitch.js';
import { useAwaitingSignature } from './substates/useAwaitingSignature.js';

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
    const [multiWalletWidgetState, setCoreMultiWalletWidgetState] = useState('idle');
    const [accountSwitchState, setAccountSwitchState, resetAccountSwitchState] = useAwaitingAccountSwitch();
    const [awaitingSignatureState, setAwaitingSignatureState, resetAwaitingSignatureState,] = useAwaitingSignature();
    const resetSubStates = useCallback(() => {
        resetAccountSwitchState();
        resetAwaitingSignatureState();
    }, [resetAccountSwitchState, resetAwaitingSignatureState]);
    const setMultiWalletWidgetState = useCallback((newWidgetState, newAccountSwitchState, newAwaitingSignatureState) => {
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

export { useMultiWalletWidgetState };
