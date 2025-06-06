/// <reference types="react" />
import { PinInputElementProperties } from '../PinInput/PinInput';
type Props = {
    handleComplete: (value: string) => void;
    hasError: boolean;
    initialValue: string[];
    isLoading: boolean;
    isValidated: boolean;
    onChange?: (value: string) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, PinInputElementProperties>;
export declare const PinField: ({ handleComplete, initialValue, inputMode, isLoading, isValidated, pattern, type, hasError, onChange, disabled, }: Props) => JSX.Element;
export {};
