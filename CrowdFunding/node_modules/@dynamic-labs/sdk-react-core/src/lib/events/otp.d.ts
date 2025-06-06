import { PhoneData } from '@dynamic-labs/types';
export type OTPEvents = {
    emailVerificationResult: (param: boolean, email: string) => void;
    smsVerificationResult: (param: boolean, phone: PhoneData) => void;
};
