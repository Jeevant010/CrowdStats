import type { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
export declare const findTurnkeyVerifiedCredentials: (verifiedCredentials: JwtVerifiedCredential[], chain: string) => JwtVerifiedCredential[];
export interface JwtVerifiedCredentialWithSmartWalletRef extends JwtVerifiedCredential {
    smartWalletRefId?: string;
    smartWalletRefAddress?: string;
}
export declare const findTurnkeyVerifiedCredentialsWithSmartWalletRef: (verifiedCredentials: JwtVerifiedCredential[], chain: string) => JwtVerifiedCredentialWithSmartWalletRef[];
