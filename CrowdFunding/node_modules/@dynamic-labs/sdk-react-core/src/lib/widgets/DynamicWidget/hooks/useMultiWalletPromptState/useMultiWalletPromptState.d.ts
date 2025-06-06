export type MultiWalletPromptState = 'pending_sign' | 'linking_new_wallet' | 'primary_not_connected' | 'pending_account_switch' | 'unlink_wallet' | 'awaiting_connection' | 'detected_new_wallet' | 'idle';
export declare const useMultiWalletPromptState: () => MultiWalletPromptState;
