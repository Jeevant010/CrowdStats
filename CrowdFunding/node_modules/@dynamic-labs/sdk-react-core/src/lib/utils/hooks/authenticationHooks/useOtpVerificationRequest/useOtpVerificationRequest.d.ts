import { OtpDestination } from '@dynamic-labs/types';
import { HandleVerification, UpdateUserReturnPayload } from '../..';
export type VerifyOtp = (verificationToken: string, destination: OtpDestination, verificationUUID?: string) => Promise<UpdateUserReturnPayload>;
/**
 * Same as useOtpVerificationRequest, but requires you to pass it a handleVerificationRequired method as param.
 * This is to avoid a circular logic issue, as handleVerificationRequired needs to use the logic in this file as well.
 */
export declare const useOtpVerificationRequestRaw: () => {
    verifyOtp: (handleVerificationRequired: HandleVerification, verificationToken: string, destination: OtpDestination, localVerificationUUID?: string) => Promise<UpdateUserReturnPayload>;
};
/**
 * Hook to make verifications and already handle nuances like handling additional verifications
 * and setting the user jwt on success
 */
export declare const useOtpVerificationRequest: () => {
    verifyOtp: VerifyOtp;
};
