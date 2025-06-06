import { FC } from 'react';
import { UserFields } from '@dynamic-labs/sdk-api-core';
import { UpdateUserWithModalFields, UpdateUserWithModalOptions } from '../../utils/hooks';
export type UserFieldEditorModalProps = UpdateUserWithModalOptions & {
    /** Submits values from the form. Should return true to keep the modal open and false to close */
    onSubmit: (value: UserFields) => Promise<unknown>;
    onCancel: (error: string) => void;
    fields: UpdateUserWithModalFields;
};
export declare const UserFieldEditorModal: FC<UserFieldEditorModalProps>;
