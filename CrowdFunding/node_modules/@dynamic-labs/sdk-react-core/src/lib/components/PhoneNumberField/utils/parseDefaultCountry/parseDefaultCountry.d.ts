import { CountryData, CountryIso2, ParsedCountry } from 'react-international-phone';
type ParseDefaultCountryProps = {
    initialPhone: string | undefined;
    defaultIso2: CountryIso2 | undefined;
    countries: CountryData[];
};
export declare const parseDefaultCountry: ({ defaultIso2, countries, initialPhone, }: ParseDefaultCountryProps) => ParsedCountry;
export {};
