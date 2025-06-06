/**
 * Whenever user wallets are populated, this hook will automatically select a wallet as the primary wallet.
 *
 * This logic doesn't apply when embedded wallets are enabled though, as the primary wallet will be selected
 * as the embedded wallet.
 */
export declare const useAutoselectPrimaryWallet: (isBridgeFlow: boolean) => void;
