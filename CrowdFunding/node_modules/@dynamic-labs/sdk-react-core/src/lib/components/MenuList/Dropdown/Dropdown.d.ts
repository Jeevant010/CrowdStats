/// <reference types="react" />
import { PopperProps } from '../../Popper/Popper/Popper';
export type DropdownProps = PopperProps & {
    isOpen: boolean;
    onClickOutside?: () => void;
    onScroll?: () => void;
    maxHeight?: number;
};
export declare const Dropdown: import("react").ForwardRefExoticComponent<PopperProps & {
    isOpen: boolean;
    onClickOutside?: (() => void) | undefined;
    onScroll?: (() => void) | undefined;
    maxHeight?: number | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
