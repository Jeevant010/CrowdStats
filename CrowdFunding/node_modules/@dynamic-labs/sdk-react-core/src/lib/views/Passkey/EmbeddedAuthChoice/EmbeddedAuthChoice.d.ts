import { FC } from 'react';
import { EmbeddedWalletCurrentAction } from '../../../shared/types';
export type EmbeddedAuthChoiceProps = {
    currentAction?: EmbeddedWalletCurrentAction;
};
export declare const EmbeddedAuthChoice: FC<EmbeddedAuthChoiceProps>;
