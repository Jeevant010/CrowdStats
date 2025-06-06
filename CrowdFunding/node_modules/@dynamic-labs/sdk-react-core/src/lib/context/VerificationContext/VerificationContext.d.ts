import { Dispatch, ReactNode, SetStateAction } from 'react';
import { PhoneData } from '@dynamic-labs/types';
type RetryData = PhoneData;
type VerificationContextProps = {
    /**
     * Where we tell the user the verification code was sent to.
     * Can be an email address, a phone number, etc.
     *
     * Obs: for phones, it's the formatted phone number.
     */
    displayedDestination: string | undefined;
    setDisplayedDestination: Dispatch<SetStateAction<string | undefined>>;
    setVerificationUUID: Dispatch<SetStateAction<string | undefined>>;
    verificationUUID: string | undefined;
    /**
     * If any data is required to resend the verification code, it can be stored here.
     *
     * Obs: for phones, it's the non formatted phone components.
     */
    retryData?: RetryData;
    setRetryData: (data: RetryData | undefined) => void;
};
export declare const VerificationContext: import("react").Context<VerificationContextProps | undefined>;
export declare const VerificationProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useVerification: () => VerificationContextProps;
export {};
