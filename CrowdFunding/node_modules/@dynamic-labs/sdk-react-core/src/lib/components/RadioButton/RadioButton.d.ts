import { ComponentPropsWithoutRef, FC } from 'react';
export type RadioButtonProps = ComponentPropsWithoutRef<'input'> & {
    className?: string;
};
export declare const RadioButton: FC<RadioButtonProps>;
