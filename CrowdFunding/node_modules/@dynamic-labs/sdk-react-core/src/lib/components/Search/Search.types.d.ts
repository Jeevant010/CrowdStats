/// <reference types="react" />
export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    className?: string;
    label: string;
    onClickClear: VoidFunction;
    value: string;
}
