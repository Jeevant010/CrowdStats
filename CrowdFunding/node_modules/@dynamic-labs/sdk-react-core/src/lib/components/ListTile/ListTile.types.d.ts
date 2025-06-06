import { CSSProperties, FC, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { CopyKey } from '../../shared';
export type ListTileProps = {
    className?: string;
    dataTestId?: string;
    leading?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    style?: CSSProperties;
    trailing?: ReactNode;
} & CopyKey;
export type ListTileComponent = FC<PropsWithChildren<ListTileProps>>;
