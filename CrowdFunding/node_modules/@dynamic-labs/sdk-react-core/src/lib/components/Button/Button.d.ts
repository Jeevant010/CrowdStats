import { FC, MouseEventHandler, ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButton';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'brand-primary' | 'card' | 'danger';
type ButtonPadding = 'small' | 'medium' | 'large' | 'none' | 'default' | 'login-screen-height';
export declare const defaultButtonVariant: ButtonVariant;
export type ButtonProps = BaseButtonProps & {
    buttonClassName?: string;
    buttonPadding?: ButtonPadding;
    buttonVariant?: ButtonVariant;
    endSlot?: JSX.Element;
    expanded?: boolean;
    feedback?: ReactNode;
    showInternalLoading?: boolean;
    loading?: boolean;
    startSlot?: JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement> | (() => Promise<void>);
};
/**
 * A Button component with options for different variants, padding, and more.
 */
export declare const Button: FC<ButtonProps>;
export {};
