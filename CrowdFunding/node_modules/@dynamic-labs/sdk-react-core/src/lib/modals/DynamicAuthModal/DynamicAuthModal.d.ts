import { FC, PropsWithChildren } from 'react';
import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { ITransitionOptions } from '../../components/Transition/transition.type';
import { ModalProps } from '../../shared/types';
type DynamicAuthModalProps = PropsWithChildren & ModalProps & {
    className?: string;
    transitionProps?: Pick<ITransitionOptions, 'isShown'>;
    projectSettings?: ProjectSettings;
};
export declare const DynamicAuthModal: FC<DynamicAuthModalProps>;
export {};
