'use client'
import { useState, useCallback } from 'react';

const validTransitions = {
    idle: ['linking_new_wallet', 'primary_not_connected', 'switching_primary'],
    linking_new_wallet: ['idle'],
    primary_not_connected: ['idle'],
    switching_primary: ['idle'],
};
const validateStateTransition = ({ from, to, }) => {
    if (from !== to && !validTransitions[from].includes(to)) {
        throw new Error(`Invalid AccountSwitch state transition from ${from} to ${to}`);
    }
    return true;
};
const validateMultiWalletWidgetState = (multiWalletWidgetState) => {
    if (multiWalletWidgetState !== 'awaiting_account_switch') {
        throw new Error(`Invalid MultiWalletWidget state while trying to set AccountSwitch state: ${multiWalletWidgetState}` +
            '\nExpected: awaiting_account_switch');
    }
};
const useAwaitingAccountSwitch = () => {
    const [accountSwitchState, setInternalAccountSwitchState] = useState('idle');
    const resetState = useCallback(() => {
        setInternalAccountSwitchState('idle');
    }, [setInternalAccountSwitchState]);
    const setAccountSwitchState = useCallback((newAccountSwitchState, widgetState) => {
        validateMultiWalletWidgetState(widgetState);
        validateStateTransition({
            from: accountSwitchState,
            to: newAccountSwitchState,
        });
        setInternalAccountSwitchState(newAccountSwitchState);
    }, [accountSwitchState]);
    return [accountSwitchState, setAccountSwitchState, resetState];
};

export { useAwaitingAccountSwitch };
