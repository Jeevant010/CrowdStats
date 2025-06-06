import { CSSProperties, FC } from 'react';
import { TransitionProps } from '../transition.type';
export type VerticalDrawerTransitionProps = {
    style?: CSSProperties;
} & TransitionProps;
export type VerticalDrawerTransitionComponent = FC<VerticalDrawerTransitionProps>;
