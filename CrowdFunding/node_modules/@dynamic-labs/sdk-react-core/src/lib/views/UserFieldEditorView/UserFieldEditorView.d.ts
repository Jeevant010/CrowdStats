import { FC, MouseEventHandler } from 'react';
import { UpdateUserWithModalFields, UpdateUserWithModalOptions, UserDataFormValues } from '../../utils/hooks/';
export type UserFieldEditorViewProps = UpdateUserWithModalOptions & {
    fields: UpdateUserWithModalFields;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onDone?: () => void;
    onSubmit: (formValues: UserDataFormValues) => void;
};
export declare const UserFieldEditorView: FC<UserFieldEditorViewProps>;
