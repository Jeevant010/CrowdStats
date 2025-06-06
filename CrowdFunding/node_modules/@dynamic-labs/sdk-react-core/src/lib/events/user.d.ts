import { UserProfile } from '@dynamic-labs/types';
export type UserEvents = {
    userProfileUpdated: (user: UserProfile) => void;
};
