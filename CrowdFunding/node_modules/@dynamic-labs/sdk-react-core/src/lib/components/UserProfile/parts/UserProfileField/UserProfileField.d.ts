/// <reference types="react" />
import { CopyKey } from '../../../../shared';
export type UserProfileFieldProps = {
    disabled?: boolean;
    label?: string;
    name: string;
    value: string | boolean | null | undefined;
    autoComplete?: string;
} & CopyKey;
export declare const UserProfileField: ({ name, label, value, copykey, autoComplete, }: UserProfileFieldProps) => JSX.Element;
