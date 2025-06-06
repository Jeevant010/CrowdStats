import { MultiWalletWidgetState, AccountSwitchState, AwaitingSignatureState } from '../../../../shared';
export type MultiWalletWidgetStateSetter = (newWidgetState: MultiWalletWidgetState, newAccountSwitchState?: AccountSwitchState, newAwaitingSignatureState?: AwaitingSignatureState) => void;
export type AccountSwitchStateSetter = (newAccountSwitchState: AccountSwitchState, widgetState: MultiWalletWidgetState) => void;
export type AwaitingSignatureStateSetter = (newAwaitingSignatureState: AwaitingSignatureState, widgetState: MultiWalletWidgetState) => void;
export type MultiWalletWidgetSubstates = {
    awaiting_account_switch: readonly [
        AccountSwitchState,
        AccountSwitchStateSetter
    ];
    awaiting_signature: readonly [
        AwaitingSignatureState,
        AwaitingSignatureStateSetter
    ];
};
export type UseMultiWalletWidgetState = () => readonly [
    MultiWalletWidgetState,
    MultiWalletWidgetStateSetter,
    MultiWalletWidgetSubstates
];
