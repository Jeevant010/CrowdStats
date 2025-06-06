import { FC, PropsWithChildren } from 'react';
import { UserFields } from '@dynamic-labs/sdk-api-core';
import { UserFieldEditorModalProps } from '../../modals/UserFieldEditorModal';
import { UpdateUserReturnPayload } from '../../utils/hooks/useUserUpdateRequest/useUpdateUser';
type ModalPropsType = Omit<UserFieldEditorModalProps, 'onCancel' | 'onSubmit'>;
export type ModalReturn = {
    fields: UserFields;
    updateUserResult: UpdateUserReturnPayload;
};
export declare const UserFieldEditorContext: import("react").Context<{
    open: (modalProps: ModalPropsType, applyChanges: (fields: UserFields) => Promise<UpdateUserReturnPayload>) => Promise<ModalReturn>;
} | undefined>;
export declare const UserFieldEditorContextProvider: FC<PropsWithChildren>;
export {};
