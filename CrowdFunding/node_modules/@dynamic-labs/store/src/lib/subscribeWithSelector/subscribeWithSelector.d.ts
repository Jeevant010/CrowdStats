import { StoreApi } from '../types';
type SliceSubscription<StateSlice> = (subscription: (state: StateSlice) => VoidFunction | void) => VoidFunction;
/**
 * Subscribes to a specific slice of the store state and invokes a callback whenever the slice changes.
 * The callback can optionally return a cleanup function that will be called before the next callback invocation
 * or when unsubscribing.
 * @template TStore - The type of the store.
 * @template StateSlice - The type of the selected slice of the store state.
 * @param {StoreApi<TStore>} store - The store object.
 * @param {(state: TStore) => StateSlice} selector - A function that selects the desired slice of the store state.
 * @returns {SliceSubscription<StateSlice>} - A function that can be used to subscribe.
 * @example
 * const store = createStore<{ counter: number; }>(() => ({ counter: 0 }));
 * const subscribeToCounter = subscribeWithSelector(
 *   store,
 *   (state) => state.counter,
 * );
 * const unsubscribe = subscribeToCounter((counter) => {
 *   console.log('Counter changed:', counter);
 *   // Optionally return a cleanup function
 *   return () => {
 *     console.log('Cleaning up before next counter change');
 *   };
 * });
 * // To unsubscribe and run the cleanup function, call the returned function
 * unsubscribe();
 */
export declare const subscribeWithSelector: <TStore extends object, StateSlice>(store: StoreApi<TStore>, selector: (state: TStore) => StateSlice) => SliceSubscription<StateSlice>;
export {};
