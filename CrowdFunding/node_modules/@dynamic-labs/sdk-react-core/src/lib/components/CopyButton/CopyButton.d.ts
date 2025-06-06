import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { CopyKey } from '../../shared';
import { ButtonProps } from '../Button/Button';
type Props = ComponentPropsWithoutRef<'button'> & {
    children: ReactNode;
    className?: string;
    onClick?: VoidFunction;
    textToCopy: string;
    variant?: 'text' | 'button';
} & CopyKey & Pick<ButtonProps, 'buttonPadding' | 'buttonVariant' | 'buttonClassName' | 'startSlot'>;
export declare const CopyButton: ({ children, className, textToCopy, onClick, variant, copykey, buttonPadding, buttonVariant, buttonClassName, startSlot, disabled, }: Props) => JSX.Element;
export {};
