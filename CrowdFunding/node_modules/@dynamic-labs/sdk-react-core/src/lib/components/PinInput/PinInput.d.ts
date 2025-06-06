import React from 'react';
export type PinInputElementProperties = 'name' | 'inputMode' | 'pattern' | 'type' | 'value' | 'disabled';
type Props = {
    autoFocus?: boolean;
    hasError: boolean;
    inputIndex: number;
    isValidated: boolean;
    onChange: (values: string[]) => void;
    onComplete?: (values: string[]) => void;
    values: string[];
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, PinInputElementProperties>;
export declare const normalizeNewValue: (currentValue: string, updatedValue: string) => string[];
export declare const PinInput: ({ autoFocus, disabled, inputIndex, inputMode, isValidated, name, onChange, pattern, type, value, values, hasError, }: Props) => JSX.Element;
export {};
