import { ReactNode } from 'react';
import { UserProfile } from '@dynamic-labs/types';
export type UserDataFormProps = {
    children?: ReactNode;
    disableSubmit?: boolean;
    userProfile: UserProfile | undefined;
};
export declare const OnboardingUserDataForm: ({ children, userProfile, disableSubmit, }: UserDataFormProps) => JSX.Element;
