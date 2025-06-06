import { FC } from 'react';
import { UserProfile } from '@dynamic-labs/types';
type CollectUserDataViewNoWalletProps = {
    /**
     * Which user field we should display as the user's identification.
     * Ex: we can show his email when logging in with email or number when logging through sms.
     */
    userIdentification: keyof UserProfile;
    /** When passed, is shown instead of a user profile field as the user identification. */
    userIdentificationOverride?: string;
};
export declare const CollectUserDataViewNoWallet: FC<CollectUserDataViewNoWalletProps>;
export {};
