import { ChangeEventHandler, FC, FocusEventHandler } from 'react';
export type UserPhoneFieldProps = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
    onBlur: FocusEventHandler<HTMLDivElement>;
    disabled: boolean;
    label: string;
    required: boolean;
    verify: boolean;
    error: string;
    name: string;
};
export declare const UserPhoneField: FC<UserPhoneFieldProps>;
