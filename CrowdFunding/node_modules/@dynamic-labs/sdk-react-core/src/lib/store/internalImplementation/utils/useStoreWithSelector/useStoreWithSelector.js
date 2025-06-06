'use client'
import { useRef, useSyncExternalStore } from 'react';

/**
 * Custom hook that provides a slice of the store state based on a selector function.
 *
 * @template TState - The type of the store state.
 * @template StateSlice - The type of the selected slice of the store state.
 * @param {StoreApi<TState>} api - The store API object.
 * @param {(state: TState) => StateSlice} selector - The selector function to extract the desired store slice.
 * @returns {StateSlice} - The selected slice of the store state.
 *
 * @example
 * const store = createStore(() => ({
 *   count: 0,
 * }))
 *
 * const count = useStoreWithSelector(store, ({ count }) => count);
 */
const useStoreWithSelector = (api, selector) => {
    /**
     * The cache is either an object or undefined. This allows us to differentiate between:
     * 1. A selector that resolved to an undefined value
     * 2. A cache that hasn't been populated yet
     */
    const serverSnapshotCacheRef = useRef(undefined);
    const getSnapshot = () => selector(api.getState());
    /**
     * Cache the server snapshot in a ref to prevent infinite loops in Next.js SSR
     *
     * Next.js can re-render components multiple times during server-side rendering.
     * If we don't cache the result of getServerSnapshot, it may cause an infinite loop
     * as the component keeps re-rendering with new snapshots.
     *
     * Prevents this log "Warning: The result of getServerSnapshot should be cached to avoid an infinite loop"
     */
    const getServerSnapshot = () => {
        if (serverSnapshotCacheRef.current === undefined) {
            serverSnapshotCacheRef.current = {
                value: selector(api.getInitialState()),
            };
        }
        return serverSnapshotCacheRef.current.value;
    };
    const slice = useSyncExternalStore(api.subscribe, getSnapshot, getServerSnapshot);
    return slice;
};

export { useStoreWithSelector };
