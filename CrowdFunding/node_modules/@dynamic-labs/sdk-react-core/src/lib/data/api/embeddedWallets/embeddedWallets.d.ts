import { EmbeddedWalletChainEnum, ExportEmbeddedWalletResponse, RegisterEmbeddedWalletSessionKeyResponse } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '../../../..';
import { CompletePasskeyRecoveryProps, CreateTurnkeyEmbeddedWalletProps, GetUserPasskeysProps, InitPasskeyRecoveryProps, UpdatePasskeyRecoveryEmailProps, UpdateUserPasskeysProps } from './types';
export declare const createTurnkeyEmbeddedWallet: ({ attestation, challenge, environmentId, chains, passkeyAlias, sessionPublicKey, }: CreateTurnkeyEmbeddedWalletProps) => Promise<UserProfile | undefined>;
export declare const initEmbeddedWalletSession: ({ authenticatorType, walletId, publicKey, environmentId, }: InitPasskeyRecoveryProps) => Promise<import("@dynamic-labs/sdk-api-core").InitPasskeyRecoveryResponse | import("@dynamic-labs/sdk-api-core").InitEmailAuthResponse>;
export declare const completePasskeyRecovery: ({ walletId, attestation, challenge, environmentId, }: CompletePasskeyRecoveryProps) => Promise<UserProfile | undefined>;
export declare const updatePasskeyRecoveryEmail: ({ environmentId, updateRecoveryEmailRequest, }: UpdatePasskeyRecoveryEmailProps) => Promise<void>;
export declare const getUserPasskeys: ({ environmentId, }: GetUserPasskeysProps) => Promise<import("@dynamic-labs/sdk-api-core").GetUserPasskeysResponse>;
export declare const updateUserPasskey: ({ environmentId, id, alias, }: UpdateUserPasskeysProps) => Promise<import("@dynamic-labs/sdk-api-core").UserPasskey | undefined>;
export declare const exportEmbeddedWallet: ({ environmentId, walletId, activityId, }: {
    environmentId: string;
    walletId: string;
    activityId: string;
}) => Promise<ExportEmbeddedWalletResponse>;
export declare const registerSessionKey: ({ environmentId, walletId, publicKey, prevSessionKeySignature, }: {
    environmentId: string;
    walletId: string;
    publicKey: string;
    prevSessionKeySignature?: string;
}) => Promise<RegisterEmbeddedWalletSessionKeyResponse>;
export declare const getCreateEmbeddedWalletAccountRequest: ({ environmentId, chain, }: {
    environmentId: string;
    chain: EmbeddedWalletChainEnum;
}) => Promise<import("@dynamic-labs/sdk-api-core").TurnkeyCreateWalletAccountsRequestBody>;
export declare const createEmbeddedWalletAccount: ({ environmentId, createEmbeddedWalletAccountRequest, }: {
    environmentId: string;
    createEmbeddedWalletAccountRequest: {
        body: string;
        url: string;
        stamp: {
            stampHeaderName: string;
            stampHeaderValue: string;
        };
    };
}) => Promise<import("@dynamic-labs/sdk-api-core").VerifyResponse>;
export declare const getDeleteEmbeddedWalletsRequest: ({ environmentId, walletId, }: {
    environmentId: string;
    walletId: string;
}) => Promise<import("@dynamic-labs/sdk-api-core").TurnkeyDeleteEmbeddedWalletsRequestBody>;
export declare const deleteEmbeddedWallets: ({ environmentId, deleteEmbeddedWalletsRequest, }: {
    environmentId: string;
    deleteEmbeddedWalletsRequest: {
        body: string;
        url: string;
        stamp: {
            stampHeaderName: string;
            stampHeaderValue: string;
        };
    };
}) => Promise<void>;
