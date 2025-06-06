import { FC } from 'react';
import { PasskeyError } from '@dynamic-labs/utils';
export type SignMessageConfirmationModalProps = {
    handler: (message: string | ArrayLike<number>) => Promise<string>;
    message: string | ArrayLike<number>;
    onReject: (error: unknown) => void;
    onSignMessage: (signedMessage: string) => void;
    hideModal: boolean;
};
export type SignMessageConfirmationModalComponent = FC<SignMessageConfirmationModalProps>;
export type SignMessageError = Error & PasskeyError & {
    reason?: string;
};
