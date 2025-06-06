import { FC, PropsWithChildren, ReactElement } from 'react';
import { CopyKey } from '../../shared';
export type AlertIcons = 'error';
export type AlertProps = PropsWithChildren & {
    contentDataTestId?: string;
    icon?: ReactElement | AlertIcons;
    variant?: 'error' | 'warning' | 'info' | 'success';
    className?: string;
} & CopyKey;
export declare const errorIconMap: Record<AlertIcons, ReactElement>;
export declare const Alert: FC<AlertProps>;
