declare const setNonce: (value: import("../..").StoredNonce) => void;
export { setNonce };
export declare const getNonce: () => string | undefined;
export declare const getNonceExpireAt: () => number | undefined;
export declare const useNonce: () => string | undefined;
export declare const useNonceExpiresAt: () => number | undefined;
export type UseNonceProps = {
    shouldFetch?: boolean;
    retries?: number;
};
export declare const useFetchNonce: ({ shouldFetch, retries, }?: UseNonceProps) => string | undefined;
export declare const consumeNonce: () => string;
export declare const fetchAndStoreNonce: () => Promise<void>;
