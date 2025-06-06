import { CSSProperties, MutableRefObject } from 'react';
import { AnchorOrigin, TransformOrigin } from '../Popper.types';
export type PopperProps = {
    anchorRef: MutableRefObject<HTMLElement | null>;
    anchorOrigin?: AnchorOrigin;
    transformOrigin?: TransformOrigin;
    className?: string;
    style?: CSSProperties;
};
/** Allows to render content outside of the current DOM parent and specify a reference position
 * To allow for opening and closing of menus, see MenuList and Dropdown components
 */
export declare const Popper: import("react").ForwardRefExoticComponent<PopperProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
