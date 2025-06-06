import { FC } from 'react';
type RetrySendVerificationCodeSectionProps = {
    retryHandler: () => Promise<void> | void;
    secondsToRetry?: number;
    disabled?: boolean;
    className?: string;
};
export declare const RetrySendVerificationCodeSection: FC<RetrySendVerificationCodeSectionProps>;
export {};
