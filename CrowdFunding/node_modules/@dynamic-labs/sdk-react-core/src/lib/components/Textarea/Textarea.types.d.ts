import { FC, PropsWithChildren, ReactNode } from 'react';
export type TextareaVariant = 'dense' | 'regular';
export type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
    className?: string;
    error?: boolean;
    id: string;
    label: string;
    message?: ReactNode;
    optional?: boolean;
    placeholder?: string;
    variant?: TextareaVariant;
    isValid?: boolean;
};
export type TextareaComponent = FC<PropsWithChildren<TextareaProps>>;
