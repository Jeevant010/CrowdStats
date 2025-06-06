import { AccountSwitchState, MultiWalletWidgetState } from '../../../../../shared/types';
export declare const useAwaitingAccountSwitch: () => readonly [AccountSwitchState, (newAccountSwitchState: AccountSwitchState, widgetState: MultiWalletWidgetState) => void, () => void];
