'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const validTransitions = {
    idle: ['linking_new_wallet', 'transferring_wallet'],
    linking_new_wallet: ['idle'],
    transferring_wallet: ['idle'],
};
const validateStateTransition = ({ from, to, }) => {
    if (from !== to && !validTransitions[from].includes(to)) {
        throw new Error(`Invalid AwaitingSignature state transition from ${from} to ${to}`);
    }
    return true;
};
const validateMultiWalletWidgetState = (multiWalletWidgetState) => {
    if (multiWalletWidgetState !== 'awaiting_signature') {
        throw new Error(`Invalid MultiWalletWidget state while trying to set AwaitingSignature state: ${multiWalletWidgetState}` +
            '\nExpected: awaiting_signature');
    }
};
const useAwaitingSignature = () => {
    const [awaitingSignatureState, setInternalAwaitingSignatureState] = React.useState('idle');
    const resetState = React.useCallback(() => {
        setInternalAwaitingSignatureState('idle');
    }, [setInternalAwaitingSignatureState]);
    const setAwaitingSignatureState = React.useCallback((newAwaitingSignatureState, widgetState) => {
        validateMultiWalletWidgetState(widgetState);
        validateStateTransition({
            from: awaitingSignatureState,
            to: newAwaitingSignatureState,
        });
        setInternalAwaitingSignatureState(newAwaitingSignatureState);
    }, [awaitingSignatureState]);
    return [
        awaitingSignatureState,
        setAwaitingSignatureState,
        resetState,
    ];
};

exports.useAwaitingSignature = useAwaitingSignature;
