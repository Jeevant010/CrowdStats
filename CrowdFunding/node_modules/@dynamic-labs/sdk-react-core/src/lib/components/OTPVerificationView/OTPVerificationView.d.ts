import { FC, MouseEventHandler } from 'react';
export type OtpVerificationLayoutProps = {
    /** Big icon that shows in the OTP modal */
    MainIcon: FC;
    /** Whatever identifies the destination the verification code was sent to, ex: an email address or a phone number */
    displayedDestination?: string;
    /** Description text to be displayed in the body */
    description?: string;
    hideHeader?: boolean;
    error?: Error;
    isLoading: boolean;
    isValid: boolean;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickEditDestination?: MouseEventHandler<HTMLButtonElement>;
    onPinChange?: (value: string) => void;
    retryHandler?: () => Promise<void> | void;
    onPinComplete: (value: string) => void;
    successBannerTextKey?: string;
    appendToEnd?: JSX.Element;
    appendAboveOTPInput?: JSX.Element;
    disabled?: boolean;
};
export declare const OTPVerificationView: FC<OtpVerificationLayoutProps>;
