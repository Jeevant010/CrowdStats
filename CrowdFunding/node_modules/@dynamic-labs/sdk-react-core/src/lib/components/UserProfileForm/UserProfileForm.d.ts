import { CSSProperties, FC } from 'react';
import { UserFields } from '@dynamic-labs/sdk-api-core';
import { UserDataFormValues } from '../../utils/hooks/useUserDataForm';
import { TypographyButtonProps } from '../TypographyButton/TypographyButton';
export type UserProfileFormProps = {
    onEditProfileSubmit?: (formValues: UserDataFormValues) => void;
    onEditProfileCancel?: () => void;
    /** Which fields should be made available for editing. Undefined means all */
    filterFields?: (keyof UserFields)[];
    formClassName?: string;
    fieldsContainerStyle?: CSSProperties;
    options?: {
        shouldEnforcePolicies?: boolean;
        submitButtonProps?: TypographyButtonProps;
        cancelButtonProps?: TypographyButtonProps;
        hideCancelButton?: boolean;
        buttonsAsFooter?: boolean;
        submitText?: string;
        cancelText?: string;
    };
};
export declare const UserProfileForm: FC<UserProfileFormProps>;
