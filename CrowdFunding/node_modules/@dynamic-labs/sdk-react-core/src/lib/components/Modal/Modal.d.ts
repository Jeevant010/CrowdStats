import { FC, PropsWithChildren } from 'react';
import { TransitionProps } from '../Transition/transition.type';
export type ModalProps = {
    className?: string;
    isShown?: boolean;
    transitionProps?: TransitionProps;
};
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
