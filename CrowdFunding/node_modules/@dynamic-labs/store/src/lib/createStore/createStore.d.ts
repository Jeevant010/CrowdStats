import { StoreApi } from '../types';
/**
 * Creates a store with the specified initial state and provides methods to manage and subscribe to the state.
 *
 * @template T - The type of the state object.
 * @param getInitialState - A function that returns the initial state object.
 * @returns An object that represents the store and provides methods to interact with the state.
 */
export declare const createStore: <T extends object>(getInitialState: () => T) => StoreApi<T>;
