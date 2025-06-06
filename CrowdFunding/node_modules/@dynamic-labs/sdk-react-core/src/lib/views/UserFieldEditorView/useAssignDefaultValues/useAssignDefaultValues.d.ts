import { UpdateUserWithModalFields } from '../../../utils/hooks';
/** This function assigns the default values for the modal's text components */
export declare const useAssignDefaultValues: (texts: Record<'title' | 'subtitle' | 'submitText', string | undefined>, fields: UpdateUserWithModalFields) => {
    title: string;
    subtitle: string;
    submitText: string;
};
