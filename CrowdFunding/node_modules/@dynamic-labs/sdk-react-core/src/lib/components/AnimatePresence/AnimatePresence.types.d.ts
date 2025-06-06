import { FC, PropsWithChildren, ReactElement } from 'react';
import { ITransitionOptions } from '../Transition/transition.type';
export type AnimationComponentProps<T extends Record<string, unknown> = Record<string, unknown>> = PropsWithChildren<T & ITransitionOptions>;
export type AnimationComponent<T extends Record<string, unknown> = Record<string, unknown>> = FC<AnimationComponentProps<T>>;
export type AnimatePresenceProps = {
    animationComponent: ReactElement<AnimationComponentProps>;
};
export type AnimatePresenceComponent = FC<PropsWithChildren<AnimatePresenceProps>>;
