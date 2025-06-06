import { EmbeddedWalletChainEnum } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
import { IEmailWalletConnector, IPasskeyWalletConnector, WebAuthnAttestation } from '@dynamic-labs/wallet-connector-core';
type CreateEmbeddedWalletRequestProps = {
    environmentId: string;
    user: UserProfile | undefined;
    walletConnector: (IPasskeyWalletConnector & IEmailWalletConnector) | undefined;
    chains: EmbeddedWalletChainEnum[];
    webAuthnAttestation?: WebAuthnAttestation;
    withAuthenticator: boolean;
    sessionPublicKey?: string;
};
export declare const createEmbeddedWalletRequest: ({ user, walletConnector, environmentId, chains, sessionPublicKey, webAuthnAttestation, withAuthenticator, }: CreateEmbeddedWalletRequestProps) => Promise<{
    embeddedWalletVerifiedCredential: import("@dynamic-labs/sdk-api-core").JwtVerifiedCredential;
    updatedUser: UserProfile;
    walletConnector: IPasskeyWalletConnector & IEmailWalletConnector;
}>;
export {};
