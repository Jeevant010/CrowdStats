/// <reference types="react" />
export declare const useSmsVerification: (type: 'login' | 'verify-only') => {
    error: Error | undefined;
    formattedPhone: string;
    isLoading: boolean;
    isValid: boolean;
    onSubmit: (variables: string) => void;
    retryOneTimePassword: () => Promise<void>;
    setError: import("react").Dispatch<import("react").SetStateAction<Error | undefined>>;
};
