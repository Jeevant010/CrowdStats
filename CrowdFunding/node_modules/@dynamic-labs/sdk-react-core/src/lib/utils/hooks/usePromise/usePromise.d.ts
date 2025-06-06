import { PromiseState, UsePromiseOptions } from './usePromise.types';
/**
 * Custom hook for handling promises and fetching data.
 * @template T - The type of the data returned by the promise.
 * @template E - The type of the error thrown by the promise.
 * @returns {PromiseState<T, E>} - The state object containing the data, error, loading status
 * and a callback to manually retrigger the promise.
 * @example
 * // Example usage with a simple fetcher function
 * const fetcher = fetch('https://api.example.com/data');
 *
 * const MyComponent = () => {
 *  const { data, isLoading, error } = usePromise(fetcher);
 *
 *  if (isLoading) {
 *    return <div>Loading...</div>;
 *  }
 *
 *  if (error) {
 *    return <div>Error: {error.message}</div>;
 *  }
 *
 * return <div>Data: {data}</div>;
 * };
 */
export declare const usePromise: <T, E = Error>(fetcher: () => T | Promise<T>, options?: UsePromiseOptions<T, E>) => PromiseState<T, E>;
