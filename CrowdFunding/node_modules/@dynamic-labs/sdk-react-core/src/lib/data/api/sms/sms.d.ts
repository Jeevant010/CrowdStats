import { UpdateSelfResponse, VerifyResponse, SmsVerificationCreateResponse } from '@dynamic-labs/sdk-api-core';
export declare const createSmsVerification: ({ isoCountryCode, phoneNumber, phoneCountryCode, environmentId, captchaToken, }: {
    /** The iso2 of the country ex: US, FR or BR */
    isoCountryCode: string;
    /** The country code ex: 1, 33, or 55 */
    phoneCountryCode: string;
    /** Only the phone number, without country code or anything but digits */
    phoneNumber: string;
    environmentId: string;
    captchaToken?: string;
}) => Promise<SmsVerificationCreateResponse>;
export declare const signInWithSmsVerification: ({ verificationToken, verificationUUID, environmentId, captchaToken, sessionPublicKey, }: {
    environmentId: string;
    verificationToken: string;
    verificationUUID: string;
    captchaToken?: string;
    sessionPublicKey?: string;
}) => Promise<VerifyResponse>;
export declare const retrySmsVerification: ({ isoCountryCode, phoneCountryCode, phoneNumber, environmentId, verificationUUID, }: {
    /** The iso2 of the country ex: US, FR or BR */
    isoCountryCode: string;
    /** The country code ex: 1, 33, or 55 */
    phoneCountryCode: string;
    /** Only the phone number, without country code or anything but digits */
    phoneNumber: string;
    environmentId: string;
    verificationUUID: string;
}) => Promise<SmsVerificationCreateResponse>;
export declare const verifySms: ({ verificationToken, verificationUUID, environmentId, }: {
    environmentId: string;
    verificationToken: string;
    verificationUUID: string;
}) => Promise<UpdateSelfResponse>;
