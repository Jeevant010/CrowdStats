import { UpdateSelfResponse, EmailVerificationCreateResponse, VerifyResponse } from '@dynamic-labs/sdk-api-core';
export declare const createEmailVerification: ({ email, environmentId, captchaToken, }: {
    email: string;
    environmentId: string;
    captchaToken?: string;
}) => Promise<EmailVerificationCreateResponse>;
export declare const signInWithEmailVerification: ({ verificationToken, verificationUUID, environmentId, captchaToken, sessionPublicKey, }: {
    environmentId: string;
    verificationToken: string;
    verificationUUID: string;
    captchaToken?: string;
    sessionPublicKey?: string;
}) => Promise<VerifyResponse>;
export declare const retryEmailVerification: ({ email, environmentId, verificationUUID, }: {
    email: string;
    environmentId: string;
    verificationUUID: string;
}) => Promise<EmailVerificationCreateResponse>;
export declare const verifyEmail: ({ verificationToken, verificationUUID, environmentId, }: {
    environmentId: string;
    verificationToken: string;
    verificationUUID: string;
}) => Promise<UpdateSelfResponse>;
