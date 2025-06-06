import { ReactNode } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { ProjectSettingsKyc } from '@dynamic-labs/sdk-api-core';
export type UserDataFieldsProps = {
    errors: FormikErrors<Record<string, string>>;
    fields?: ProjectSettingsKyc[];
    policiesConsentInnerComponentArray?: ReactNode[];
    touched: FormikTouched<Record<string, string>>;
    /**
     * Makes it so as soon as the user starts editing a field with verification enabled,
     * all other fields with verification enabled become disabled.
     *
     * Will only work if you provide the currentValues and initialValues props as well.
     */
    disableEditingMultipleFieldsWithVerification?: boolean;
    currentValues?: Record<string, any>;
    initialValues?: Record<string, any>;
};
export declare const UserDataFields: ({ errors, policiesConsentInnerComponentArray, fields, touched, currentValues, disableEditingMultipleFieldsWithVerification, initialValues, }: UserDataFieldsProps) => JSX.Element;
