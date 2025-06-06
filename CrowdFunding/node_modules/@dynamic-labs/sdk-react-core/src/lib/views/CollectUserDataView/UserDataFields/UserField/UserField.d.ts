import { FC, ReactNode } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { ProjectSettingsKyc } from '@dynamic-labs/sdk-api-core';
import { FieldConfig } from '../../useFields';
type UserFieldProps = {
    fieldData: FieldConfig;
    fieldSettings: ProjectSettingsKyc;
    disabled: boolean;
    errors: FormikErrors<Record<string, string>>;
    touched: FormikTouched<Record<string, string>>;
    policiesConsentInnerComponentArray: ReactNode[] | undefined;
};
export declare const UserField: FC<UserFieldProps>;
export {};
