import { RegistrationResponseJSON } from '@simplewebauthn/types';
export declare const getWebAuthnAttestationTurnkeyAdapter: (options: CredentialCreationOptions) => Promise<{
    attestationObject: string;
    clientDataJson: string;
    credentialId: string;
    transports: ("AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
}>;
export declare const convertAttestationResultToTurnkey: (attestation: RegistrationResponseJSON) => {
    attestationObject: string;
    clientDataJson: string;
    credentialId: string;
    transports: ("AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
};
export declare const convertPublicKeyToWebauthn: (publicKey: PublicKeyCredentialCreationOptions) => {
    challenge: string;
    excludeCredentials: {
        id: string;
        transports?: AuthenticatorTransport[] | undefined;
        type: "public-key";
    }[] | undefined;
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    attestation?: AttestationConveyancePreference | undefined;
    authenticatorSelection?: AuthenticatorSelectionCriteria | undefined;
    extensions?: AuthenticationExtensionsClientInputs | undefined;
    pubKeyCredParams: PublicKeyCredentialParameters[];
    rp: PublicKeyCredentialRpEntity;
    timeout?: number | undefined;
};
