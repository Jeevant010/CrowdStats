import { FC } from 'react';
export type EmailVerificationProps = {
    isEmailRecoveryFlow?: boolean;
    showRetryButton?: boolean;
    showTransferMessage?: boolean;
};
export declare const EmailVerification: FC<EmailVerificationProps>;
