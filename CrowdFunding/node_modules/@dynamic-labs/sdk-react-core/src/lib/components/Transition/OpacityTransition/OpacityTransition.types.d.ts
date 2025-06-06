import { CSSProperties, FC } from 'react';
import { TransitionProps } from '../transition.type';
export type OpacityTransitionProps = {
    style?: CSSProperties;
} & TransitionProps;
export type OpacityTransitionComponent = FC<OpacityTransitionProps>;
