/// <reference types="react" />
export type OptionsSwitcherOption = {
    key: string;
    label?: string;
};
export type OptionsSwitcherClassNames = {
    activeButtonClassName?: string;
    buttonClassName?: string;
    rootClassName?: string;
};
export type OptionsSwitcherProps<T> = {
    onChange?: (key: T) => void;
    options?: OptionsSwitcherOption[];
    value?: T;
};
export type Props<T> = OptionsSwitcherClassNames & OptionsSwitcherProps<T>;
export declare const OptionsSwitcher: <T extends string>({ onChange, value, options, rootClassName, activeButtonClassName, buttonClassName, }: Props<T>) => JSX.Element;
