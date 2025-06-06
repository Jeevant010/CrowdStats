import { Dispatch, FC, FocusEventHandler, SetStateAction } from 'react';
import { CountryData } from 'react-international-phone';
import { OnUpdatePhoneData } from './usePhoneInputLogic';
export type PhoneNumberFieldProps = {
    countries: CountryData[];
    isLoading?: boolean;
    disabled?: boolean;
    label?: string;
    error?: string;
    onUpdate?: OnUpdatePhoneData;
    onBlur?: FocusEventHandler<HTMLDivElement>;
    setIsHovered?: Dispatch<SetStateAction<boolean>>;
    setIsFocused?: Dispatch<SetStateAction<boolean>>;
    initialPhone?: string;
    appendRight?: JSX.Element;
};
export declare const PhoneNumberField: FC<PhoneNumberFieldProps>;
