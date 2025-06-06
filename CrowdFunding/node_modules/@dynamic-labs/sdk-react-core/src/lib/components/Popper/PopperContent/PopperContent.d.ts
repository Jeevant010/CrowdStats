import { CSSProperties } from 'react';
import { TransformOrigin } from '../Popper.types';
export type PopperContentProps = {
    transformOrigin: TransformOrigin;
    style?: CSSProperties;
    className?: string;
};
export declare const PopperContent: import("react").ForwardRefExoticComponent<PopperContentProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
