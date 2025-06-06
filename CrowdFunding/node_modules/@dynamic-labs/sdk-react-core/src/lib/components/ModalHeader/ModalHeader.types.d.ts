import { CSSProperties, ReactElement, ReactNode } from 'react';
export type ModalHeaderVariant = 'default' | 'filled';
export type ModalHeaderProps = {
    alignContent?: 'bottom';
    children?: ReactNode;
    leading?: ReactNode;
    displayLeading?: boolean;
    positionAbsolute?: boolean;
    trailing?: ReactNode;
    displayTrailing?: boolean;
    style?: CSSProperties;
    displayBorder?: boolean;
    description?: ReactNode;
    variant?: ModalHeaderVariant;
};
export type ModalHeaderComponent = (props: ModalHeaderProps) => ReactElement;
