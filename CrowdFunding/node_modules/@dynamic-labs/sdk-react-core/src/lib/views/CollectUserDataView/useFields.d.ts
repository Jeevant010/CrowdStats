import { StringSchema, ArraySchema, BooleanSchema } from 'yup';
import { CustomFieldValidationRules } from '@dynamic-labs/sdk-api-core';
export type FieldConfig = {
    label: string;
    key: string;
    type: string;
    validation: StringSchema | BooleanSchema | ArraySchema<any>;
    autoComplete?: string;
    isCustom?: boolean;
    validationRules?: CustomFieldValidationRules;
};
export declare const customFieldValidationMap: {
    checkbox: import("yup/lib/array").OptionalArraySchema<import("yup").AnySchema, import("yup/lib/types").AnyObject, any[] | undefined>;
    select: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    text: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
};
export declare const useFields: () => {
    fieldsConfig: {
        alias: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        country: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        email: {
            autoComplete: string;
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        firstName: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        jobTitle: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        lastName: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        phoneNumber: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        policiesConsent: {
            key: string;
            label: string;
            type: string;
            validation: BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, boolean | undefined>;
        };
        tShirtSize: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        team: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
        username: {
            key: string;
            label: string;
            type: string;
            validation: StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
        };
    };
};
