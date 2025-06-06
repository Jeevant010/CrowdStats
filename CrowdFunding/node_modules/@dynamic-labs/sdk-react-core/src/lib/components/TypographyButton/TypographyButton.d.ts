import { FC } from 'react';
import { CopyKey } from '../../shared';
import { ButtonProps } from '../Button';
import { TypographyProps } from '../Typography/Typography.types';
export type TypographyButtonProps = ButtonProps & {
    typographyProps?: Omit<TypographyProps, 'as'>;
    leading?: JSX.Element;
    trailing?: JSX.Element;
    description?: string;
} & CopyKey;
export declare const TypographyButton: FC<TypographyButtonProps>;
