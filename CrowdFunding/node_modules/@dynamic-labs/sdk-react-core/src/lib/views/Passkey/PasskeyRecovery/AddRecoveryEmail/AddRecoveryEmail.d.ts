import { FC } from 'react';
import { AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
import { EmbeddedWalletCurrentAction } from '../../../../shared';
export type AddRecoveryEmailProps = {
    canSkipAddingEmail?: boolean;
    shouldInitRecovery?: boolean;
    authenticatorType?: AuthenticatorType;
    currentAction?: EmbeddedWalletCurrentAction;
    isFromEmailVerification?: boolean;
};
export declare const AddRecoveryEmail: FC<AddRecoveryEmailProps>;
