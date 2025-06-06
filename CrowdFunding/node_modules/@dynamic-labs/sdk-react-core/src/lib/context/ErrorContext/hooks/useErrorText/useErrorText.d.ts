import { ErrorCode } from '@dynamic-labs/utils';
export declare const mapErrorCodeToTranslation: Record<ErrorCode | string, string>;
/** A hook that listens to the error context and returns a translated value */
export declare const useErrorText: () => {
    errorText: string | undefined;
};
