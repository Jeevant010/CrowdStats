import { UpdateSelfResponse, VerifyResponse } from '@dynamic-labs/sdk-api-core';
import { AuthMethod, AuthOptions } from '@dynamic-labs/types';
import { UserProfile } from '../../../..';
import { UpdateUserReturnPayload } from '../useUserUpdateRequest';
export type UseUserAuthOptions = {
    [K in AuthMethod]: Partial<AuthOptions[K]>;
};
export type OnErrorCallback = (error: unknown) => void;
export type OnSettledCallback = () => void;
export type UseUserAuthProps<T extends AuthMethod> = {
    authMethod?: T;
};
export type InitUserAuthProps<T extends AuthMethod> = {
    /**
     * Mainly used for wallet auth.
     * Indicates if the user is signing in or just linking.
     */
    isSignIn?: boolean;
    /**
     * Api call that will be made to verify the user.
     */
    verifyFunction: () => Promise<UserProfile | VerifyResponse | void>;
    /**
     * Optional callback that will be called with the new jwt right after the user is verified.
     */
    onVerifySuccess?: (user?: UserProfile) => void;
    /**
     * Optional callback that will be called whenever initAuth finishes (either successfully or not).
     */
    onSettled?: OnSettledCallback;
    /**
     * Optional callback that will be called whenever there is an error with initAuth.
     */
    onError?: OnErrorCallback;
    /**
     * Whether to show a success message after the user is verified or not.
     * If true, it will wait for 2 seconds before hidding the success message and continuing.
     */
    showSuccessMessage?: boolean;
    /**
     * If true, it will skip the default error handling and just call the onError callback.
     */
    skipDefaultErrorHandling?: boolean;
    /**
     * Props specific to the auth method.
     * (e.g. isRecoveryFlow for email auth, provider for social auth, etc.)
     */
    options?: UseUserAuthOptions[T];
};
export type CompleteUserAuthProps<T extends AuthMethod> = {
    /**
     * Optional function specific to each auth method that should be called to complete the auth flow
     * after onboarding is completed.
     */
    completeSignInFlow?: (updateUserProfileResponse: UpdateSelfResponse) => Promise<boolean>;
    /**
     * Api call that will be made to update the user to complete the auth and return a UpdateUserReturnPayload.
     */
    updateJwtFunction: () => Promise<UpdateUserReturnPayload>;
    /**
     * Optional callback that will be called whenever updateJwtFunction completes successfuly.
     */
    onValidUpdatedJwt?: () => void;
    /**
     * Props specific to the auth method.
     * (e.g. isRecoveryFlow for email auth, provider for social auth, etc.)
     */
    options?: UseUserAuthOptions[T];
};
