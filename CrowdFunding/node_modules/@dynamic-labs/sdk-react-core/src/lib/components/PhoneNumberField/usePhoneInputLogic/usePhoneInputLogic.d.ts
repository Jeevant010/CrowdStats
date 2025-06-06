import { ChangeEventHandler, Dispatch, KeyboardEventHandler, RefObject, SetStateAction } from 'react';
import { CountryData, CountryIso2, ParsedCountry } from 'react-international-phone';
export type OnUpdatePhoneData = (values: {
    phone: string;
    formattedPhone: string;
    country: ParsedCountry;
}) => void;
type UsePhoneLogicProps = {
    countryInputRef: RefObject<HTMLInputElement>;
    setCountryDropdownOpen: Dispatch<SetStateAction<boolean>>;
    setInvalidNumberMessage: Dispatch<SetStateAction<string | undefined>>;
    countries: CountryData[];
    onUpdate?: OnUpdatePhoneData;
    initialPhone?: string;
    defaultIso2?: CountryIso2;
};
export declare const usePhoneInputLogic: ({ countryInputRef, setCountryDropdownOpen, setInvalidNumberMessage, onUpdate, initialPhone, countries, defaultIso2, }: UsePhoneLogicProps) => {
    closeDropdown: () => void;
    countryFontSize: string;
    countryInput: string;
    currentCountry: ParsedCountry;
    filteredCountries: CountryData[];
    formattedPhone: string;
    handleCountryInput: ChangeEventHandler<HTMLInputElement>;
    handleCountryKeyDown: KeyboardEventHandler<HTMLInputElement>;
    handlePhoneInput: (e: import("react").ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => string;
    hasInput: boolean;
    inputRef: import("react").MutableRefObject<HTMLInputElement | null>;
    onBlurCountry: () => void;
    onFocusCountry: () => void;
    onMenuDisplayToggle: (menu: HTMLDivElement | null) => void;
    openDropdown: () => void;
    setCountry: (newCountry: ParsedCountry) => void;
};
export {};
