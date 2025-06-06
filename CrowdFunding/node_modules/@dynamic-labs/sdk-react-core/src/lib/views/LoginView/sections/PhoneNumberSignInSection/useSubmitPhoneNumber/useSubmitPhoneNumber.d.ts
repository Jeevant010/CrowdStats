import { FormEvent } from 'react';
import { ParsedCountry } from 'react-international-phone';
export type UseSubmitPhoneNumberProps = {
    onSubmit: VoidFunction | undefined;
    onSubmitError: VoidFunction | undefined;
    country: ParsedCountry | undefined;
    phone: string;
    setInvalidNumberMessage: (message: string | undefined) => void;
};
export declare const useSubmitPhoneNumber: ({ onSubmit, onSubmitError, country, phone, setInvalidNumberMessage, }: UseSubmitPhoneNumberProps) => (event: FormEvent<HTMLFormElement>) => Promise<void>;
