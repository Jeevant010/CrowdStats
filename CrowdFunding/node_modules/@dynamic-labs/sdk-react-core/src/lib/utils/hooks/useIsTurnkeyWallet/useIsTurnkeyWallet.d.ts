export declare const useIsTurnkeyWallet: () => {
    hasRecoveryEmail: boolean;
    hasTurnkeyVerifiedCredentialAuthenticator: boolean;
    isSessionKeyCompatible: boolean;
    isTurnkeyWallet: boolean;
    isTurnkeyWalletWithoutAuthenticator: boolean;
    turnkeyVerifiedCredential: import("@dynamic-labs/sdk-api-core").JwtVerifiedCredential | undefined;
};
