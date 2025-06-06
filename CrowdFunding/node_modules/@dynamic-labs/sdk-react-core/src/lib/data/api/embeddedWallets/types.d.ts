import { EmbeddedWalletChainEnum, PasskeyRegistrationCredential, UpdateRecoveryEmailRequest } from '@dynamic-labs/sdk-api-core';
import { AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
export type CreateTurnkeyEmbeddedWalletProps = {
    environmentId: string;
    attestation?: PasskeyRegistrationCredential;
    challenge?: string;
    chains?: EmbeddedWalletChainEnum[];
    passkeyAlias?: string;
    sessionPublicKey?: string;
};
export type InitPasskeyRecoveryProps = {
    authenticatorType: AuthenticatorType;
    environmentId: string;
    walletId: string;
    publicKey: string;
};
export type CompletePasskeyRecoveryProps = {
    environmentId: string;
    walletId: string;
    attestation: PasskeyRegistrationCredential;
    challenge: string;
};
export type UpdatePasskeyRecoveryEmailProps = {
    environmentId: string;
    updateRecoveryEmailRequest: UpdateRecoveryEmailRequest;
};
export type GetUserPasskeysProps = {
    environmentId: string;
};
export type UpdateUserPasskeysProps = {
    environmentId: string;
    id: string;
    alias: string;
};
