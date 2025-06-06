type UnsupportedProviderError = {
    reason: string;
    value: unknown;
};
export declare const isUnsupportedProviderError: (error: UnsupportedProviderError | unknown) => error is UnsupportedProviderError;
export {};
