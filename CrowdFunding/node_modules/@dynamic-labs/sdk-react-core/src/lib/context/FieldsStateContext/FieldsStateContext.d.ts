import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { ParsedCountry } from 'react-international-phone';
export type FieldsStateContextType = {
    /**
     * Allows telling which country is selected, so that we can use it to detect if phone
     * number is too short.
     */
    selectedPhoneCountry: MutableRefObject<ParsedCountry | undefined>;
};
export declare const FieldsStateContext: import("react").Context<FieldsStateContextType | undefined>;
export declare const FieldsStateProvider: FC<PropsWithChildren>;
export declare const useFieldsState: () => FieldsStateContextType;
