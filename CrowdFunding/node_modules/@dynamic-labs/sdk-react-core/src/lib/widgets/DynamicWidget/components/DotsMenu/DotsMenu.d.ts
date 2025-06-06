import { ReactElement } from 'react';
import { type MenuOption } from '../../../../components/MenuList/DropdownMenu';
type Props = {
    options: MenuOption[];
    direction?: 'right' | 'left';
    buttonClassName?: string;
    buttonClassNameWithOpenMenu?: string;
    iconOverride?: ReactElement;
};
export declare const DotsMenu: ({ options, buttonClassName, buttonClassNameWithOpenMenu, direction, iconOverride, }: Props) => JSX.Element;
export {};
