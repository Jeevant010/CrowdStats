import { CSSProperties, FC, PropsWithChildren } from 'react';
import { PopperProps } from '../../Popper/Popper/Popper';
export interface MenuListProps {
    isOpen: boolean;
    popperProps: Omit<Omit<PopperProps, 'className'>, 'style'>;
    onClickClose?: () => void;
    mobileTitle?: string;
    dropdownClassName?: string;
    dropdownStyle?: CSSProperties;
    overlayCardClassName?: string;
    overlayCardStyle?: CSSProperties;
    className?: string;
    style?: CSSProperties;
}
export declare const MenuList: FC<PropsWithChildren<MenuListProps>>;
