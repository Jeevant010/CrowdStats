import { CompleteUserAuthProps, InitUserAuthProps, OnErrorCallback, UseUserAuthOptions, UseUserAuthProps } from './useUserAuth.types';
export declare const useUserAuth: <T extends keyof import("@dynamic-labs/types").AuthOptions>({ authMethod, }: UseUserAuthProps<T>) => {
    cancelAuth: () => Promise<void>;
    completeAuth: ({ completeSignInFlow, updateJwtFunction, onValidUpdatedJwt, options, }: CompleteUserAuthProps<T>) => Promise<void>;
    handleAuthError: <T_1 extends keyof import("@dynamic-labs/types").AuthOptions>(error: any, { options, onError, }: {
        options?: UseUserAuthOptions[T_1] | undefined;
        onError?: OnErrorCallback | undefined;
    }) => void;
    initAuth: ({ isSignIn, verifyFunction, onVerifySuccess, onSettled, onError, showSuccessMessage, skipDefaultErrorHandling, }: InitUserAuthProps<T>) => Promise<void>;
};
