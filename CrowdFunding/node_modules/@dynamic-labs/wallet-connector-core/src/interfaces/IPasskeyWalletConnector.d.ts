import { WalletConnectorBase } from '../WalletConnectorBase';
export interface Attestation {
    attestationObject: string;
    clientDataJson: string;
    credentialId: string;
    transports: unknown[];
}
export interface WebAuthnAttestation {
    attestation: Attestation;
    challenge: string;
    displayName?: string;
}
export type RecoveryWebAuthnAttestation = WebAuthnAttestation & {
    turnkeySubOrganizationId: string;
};
export type RecoveryEmailParams = {
    organizationId: string;
    email: string;
    turnkeyUserId: string;
};
export type AuthenticatorType = 'passkey' | 'email';
export interface IPasskeyWalletConnector extends WalletConnectorBase {
    getWebAuthnAttestation(): Promise<WebAuthnAttestation>;
    getAuthenticatorHandler: () => AuthenticatorRecoveryHandler;
    getExportHandler: () => ExportHandler;
    get passkeyIdentifier(): string | undefined | null;
    setPasskeyIdentifier: (passkeyIdentifier: string) => void;
}
export interface AuthenticatorRecoveryHandler {
    initRecovery: (authType: AuthenticatorType, iframeContainer: HTMLElement, iframeElementId: string, sessionExpiration?: number) => Promise<string | null>;
    verifyRecoveryCode: (recoveryBundle: string, organizationId?: string) => Promise<unknown>;
    completeRecovery: (recoveryParams: RecoveryWebAuthnAttestation) => Promise<unknown>;
    addPasskeyAuthenticator: (passkeyAuthenticatorParams: RecoveryWebAuthnAttestation) => Promise<unknown>;
    addEmailRecovery: (params: RecoveryEmailParams) => Promise<unknown>;
    clear: () => void;
    isSessionActive: () => boolean;
    get publicKey(): string | undefined | null;
    get recoveryType(): AuthenticatorType | undefined | null;
    set recoveryUserId(recoveryUserId: string);
}
export interface ExportHandler {
    verifyExportWallet: (exportParams: {
        exportBundle: string;
        organizationId: string;
    }) => Promise<unknown>;
    verifyExportPrivateKey: (exportParams: {
        exportBundle: string;
        organizationId: string;
        chain?: string;
    }) => Promise<unknown>;
    initExport: (iframeContainer: HTMLElement, iframeElementId: string) => Promise<string | null>;
    exportWallet: (exportParams: {
        address?: string;
        walletId: string;
        organizationId: string;
    }) => Promise<unknown>;
    exportPrivateKey: (exportParams: {
        privateKeyId: string;
        organizationId: string;
    }) => Promise<unknown>;
    clear: () => void;
    get publicKey(): string | undefined | null;
}
