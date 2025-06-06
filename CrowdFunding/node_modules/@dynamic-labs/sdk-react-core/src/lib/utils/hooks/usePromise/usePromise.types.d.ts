import { DependencyList } from 'react';
export type PromiseState<T, E> = {
    data: T;
    error: E | undefined;
    isLoading: boolean;
    /**
     * Re-fetches the value.
     * @return the result. If the fetch fails, returns undefined.
     */
    retrigger: () => Promise<T | undefined>;
};
export type UsePromiseOptions<T, E = Error> = {
    /** An array of dependencies for the hook */
    deps?: DependencyList;
    /** Flag indicating whether the fetch should be auto triggered or not */
    enabled?: boolean;
    /** Callback to be called before a batch of fetch attempts is made */
    onBeforeFetch?: VoidFunction;
    /** Callback to be called when the fetch is rejected with an error */
    onReject?: (error: E) => void;
    /** Callback to be called when the fetch is resolved successfully */
    onResolve?: (data: T) => void;
    /** The number of times to retry the fetch in case of failure */
    retries?: number;
} & (undefined extends T ? {
    /** The initial data the hook will use until the promise is resolved */
    initialData?: T;
} : {
    /** The initial data the hook will use until the promise is resolved */
    initialData: T;
});
