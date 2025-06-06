import { FC, MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import { CopyKey } from '../../../../shared';
type InlineWidgetButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon?: ReactElement;
    className?: string;
} & CopyKey;
export declare const InlineWidgetButton: FC<PropsWithChildren<InlineWidgetButtonProps>>;
export {};
