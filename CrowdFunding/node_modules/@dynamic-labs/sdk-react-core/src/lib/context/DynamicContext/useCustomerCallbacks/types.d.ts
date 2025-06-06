import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
import { OnAuthSuccess, OnUserProfileUpdate, Wallet } from '../../../shared/types';
export type Callback = 'authSuccess';
export type CallbackParams = {
    /** For embedded wallet events */
    email?: string;
    verifiedCredential?: JwtVerifiedCredential;
};
export type UseCustomerCallbacksArgs = {
    callbacks: {
        onAuthSuccess?: OnAuthSuccess;
        onUserProfileUpdate?: OnUserProfileUpdate;
    };
    handleLogOut: () => Promise<void>;
    isAuthenticated: boolean;
    primaryWallet: Wallet | null;
    user: UserProfile | undefined;
};
export type SetCallbackType = (callback: Callback, params?: CallbackParams) => void;
