import { EmbeddedWalletChainEnum } from '@dynamic-labs/sdk-api-core';
import { Wallet, WalletConnector, WebAuthnAttestation } from '@dynamic-labs/wallet-connector-core';
import { EmbeddedWalletVersion } from './constants';
export declare const isConnectorSessionKeyActive: (connector: WalletConnector | undefined) => boolean;
/**
 *
 * @returns {
 * createEmbeddedWallet, - creates Secure enclave embedded wallet according to the settings
 * createOrRestoreSession, - creates or restores a embedded wallet session
 * createPasskey, - creates a new passkey both for an existing wallet or a wallet to be created
 * getPasskeys, - gets all passkeys for the user
 * isLoadingEmbeddedWallet, - loading state of the embedded wallet
 * isSessionActive, - checks if the embedded wallet session is active
 * revealEmbeddedWalletKey - export the recovery phrase or private key of the embedded wallet
 * sendOneTimeCode, - sends a one-time code to the user so they can create a session or add a new passkey
 * userHasEmbeddedWallet, - checks if the user has an embedded wallet
 * }
 */
export declare const useSecureEnclaveEmbeddedWallet: () => {
    readonly createEmbeddedWallet: (chains?: EmbeddedWalletChainEnum[], options?: {
        webAuthnAttestation: WebAuthnAttestation;
    }) => Promise<Wallet | undefined>;
    readonly createEmbeddedWalletAccount: ({ chain }: {
        chain: EmbeddedWalletChainEnum;
    }) => Promise<import("dist/packages/types/src").UserProfile | undefined>;
    readonly createOrRestoreSession: (options?: {
        oneTimeCode: string;
    } | undefined) => Promise<string | undefined>;
    readonly createPasskey: (options: {
        oneTimeCode: string;
    } | undefined) => Promise<WebAuthnAttestation>;
    readonly getPasskeys: () => Promise<import("@dynamic-labs/sdk-api-core").UserPasskey[]>;
    readonly getWalletVersion: () => EmbeddedWalletVersion;
    readonly isLoadingEmbeddedWallet: boolean;
    readonly isSessionActive: boolean;
    readonly revealEmbeddedWalletKey: ({ type, htmlContainerId, }: {
        type: 'recoveryPhrase' | 'privateKey';
        htmlContainerId?: string;
    }) => Promise<boolean>;
    readonly sendOneTimeCode: () => Promise<string>;
    readonly userHasEmbeddedWallet: () => boolean;
};
