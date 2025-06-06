import { FC, PropsWithChildren, ReactNode } from 'react';
export type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
    className?: string;
    error?: boolean;
    label: string;
    message?: ReactNode;
    optional?: boolean;
    selectDataTestId?: string;
};
export type SelectComponent = FC<PropsWithChildren<SelectProps>>;
