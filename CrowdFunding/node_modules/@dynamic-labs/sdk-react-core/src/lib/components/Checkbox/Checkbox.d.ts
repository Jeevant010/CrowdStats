import React, { ChangeEvent } from 'react';
export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> & {
    ariaLabel?: string;
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
};
export declare const Checkbox: ({ ariaLabel, checked, className, defaultChecked, disabled, id, name, onChange, value, }: CheckboxProps) => JSX.Element;
