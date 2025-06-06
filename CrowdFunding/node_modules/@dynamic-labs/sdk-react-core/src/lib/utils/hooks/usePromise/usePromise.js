'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { logger } from '../../../shared/logger.js';
import { resolveFetcher } from './utils/resolveFetcher/resolveFetcher.js';

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
const usePromise = (
/** A function that returns the data or a promise that resolves to the data */
fetcher, 
/** Options for the hook */
options) => {
    const lastCallTimestamp = useRef(new Date().getTime());
    const { deps = [], initialData = undefined, enabled = true, retries = 0, } = options || {};
    // Keep the callbacks updated regardless of when trigger is called
    const callbacks = useRef({
        onBeforeFetch: options === null || options === void 0 ? void 0 : options.onBeforeFetch,
        onReject: options === null || options === void 0 ? void 0 : options.onReject,
        onResolve: options === null || options === void 0 ? void 0 : options.onResolve,
    });
    callbacks.current = {
        onBeforeFetch: options === null || options === void 0 ? void 0 : options.onBeforeFetch,
        onReject: options === null || options === void 0 ? void 0 : options.onReject,
        onResolve: options === null || options === void 0 ? void 0 : options.onResolve,
    };
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(enabled);
    const [error, setError] = useState(undefined);
    const trigger = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const callTimestamp = new Date().getTime();
        const diffFromLastCall = callTimestamp - lastCallTimestamp.current;
        if (diffFromLastCall < 5) {
            logger.logVerboseTroubleshootingMessage('usePromise: Fetcher function was called in very quick succession. Please make sure the fetcher function is not synchronous and that you are not calling it inside a loop.', deps);
        }
        lastCallTimestamp.current = callTimestamp;
        setIsLoading(true);
        (_b = (_a = callbacks.current).onBeforeFetch) === null || _b === void 0 ? void 0 : _b.call(_a);
        return resolveFetcher(fetcher, { retries }, (resultError, resultData) => {
            var _a, _b, _c, _d;
            if (callTimestamp !== lastCallTimestamp.current)
                return;
            if (resultError) {
                logger.error(resultError);
                setError(resultError);
                (_b = (_a = callbacks.current).onReject) === null || _b === void 0 ? void 0 : _b.call(_a, resultError);
                return;
            }
            setData(resultData);
            (_d = (_c = callbacks.current).onResolve) === null || _d === void 0 ? void 0 : _d.call(_c, resultData);
        }).finally(() => setIsLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), deps);
    useEffect(() => {
        if (enabled)
            trigger();
    }, [trigger, enabled]);
    return useMemo(() => ({
        data: data,
        error,
        isLoading,
        retrigger: trigger,
    }), [data, error, isLoading, trigger]);
};

export { usePromise };
