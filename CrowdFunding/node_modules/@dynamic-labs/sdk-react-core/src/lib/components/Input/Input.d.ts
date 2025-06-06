/// <reference types="react" />
export declare const Input: import("react").ForwardRefExoticComponent<Pick<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>> & {
    containerClassName?: string | undefined;
    className?: string | undefined;
    error?: boolean | undefined;
    success?: boolean | undefined;
    id: string;
    label: string;
    message?: import("react").ReactNode;
    optional?: boolean | undefined;
    placeholder?: string | undefined;
    suffix?: import("react").ReactNode;
    variant?: import("./Input.types").InputVariant | undefined;
} & import("../../shared").CopyKey & import("react").RefAttributes<HTMLInputElement>>;
