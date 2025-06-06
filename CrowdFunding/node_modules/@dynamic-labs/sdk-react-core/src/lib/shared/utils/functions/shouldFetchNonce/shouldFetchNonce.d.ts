import { AuthMode } from '@dynamic-labs/types';
type ShouldFetchNonceProps = {
    authMode: AuthMode;
};
export declare const shouldFetchNonce: ({ authMode }: ShouldFetchNonceProps) => boolean;
export {};
