import { FC } from 'react';
export type UserProfileField = {
    label: string;
    key: string;
    type: string;
};
export type UserProfileProps = {
    rootClassName?: string;
};
export declare const UserProfile: FC<UserProfileProps>;
