import { UserFields } from '@dynamic-labs/sdk-api-core';
export type UpdateUserWithModalOptions = {
    title?: string;
    subtitle?: string;
    submitText?: string;
};
export type UpdateUserWithModalFields = (keyof UserFields)[];
