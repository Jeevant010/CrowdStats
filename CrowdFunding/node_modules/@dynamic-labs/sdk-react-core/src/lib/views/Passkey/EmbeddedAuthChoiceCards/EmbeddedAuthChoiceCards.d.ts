import { FC } from 'react';
import { AuthenticatorType } from '@dynamic-labs/wallet-connector-core';
import { EmbeddedWalletCurrentAction } from '../../../shared';
interface EmbeddedAuthChoiceCardsProps {
    currentAction?: EmbeddedWalletCurrentAction;
    supportedAuthenticators: AuthenticatorType[];
}
export declare const EmbeddedAuthChoiceCards: FC<EmbeddedAuthChoiceCardsProps>;
export {};
