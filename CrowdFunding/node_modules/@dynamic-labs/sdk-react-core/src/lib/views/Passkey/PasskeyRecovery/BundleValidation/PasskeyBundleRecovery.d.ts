import { FC } from 'react';
import { AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
import { EmbeddedWalletCurrentAction } from '../../../../shared/types';
export type PasskeyBundleValidationProps = {
    authenticatorType: AuthenticatorType;
    currentAction?: EmbeddedWalletCurrentAction;
};
export declare const PasskeyBundleRecovery: FC<PasskeyBundleValidationProps>;
