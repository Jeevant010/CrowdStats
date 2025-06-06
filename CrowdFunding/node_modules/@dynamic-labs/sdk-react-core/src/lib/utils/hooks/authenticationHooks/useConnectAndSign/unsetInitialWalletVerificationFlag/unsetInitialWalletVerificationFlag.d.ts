/**
 * The max time the SDK will wait before unsetting the initial wallet verification flag.
 * If the corresponding walletAdded event is triggered before this timeout, the flag will be unset immediately.
 *
 * See justification for this in comments where it is being called.
 */
export declare const UNSET_TIMEOUT = 5500;
export declare const unsetInitialWalletVerificationFlag: () => void;
export declare const unsetInitialWalletVerificationFlagWithTimeout: () => void;
