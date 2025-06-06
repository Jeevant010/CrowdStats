import { DynamicContextProps } from '../context/DynamicContext/types';
import { SdkStore } from './types';
/**
 * Returns the initial state for the SdkStore
 */
export declare const createInitialState: (dynamicContextProps: DynamicContextProps) => SdkStore;
/**
 * Filters out which variables should be stored to local storage.
 * Also allows transforming them before storage.
 */
export declare const transformStateForLocalStorage: (state: SdkStore) => Partial<SdkStore>;
/**
 * The store version works to invalidate old versions of the stored data
 * it should only be updated when the schema saved to local storage has a braking change.
 *
 * update using the current date in the format YYYY-MM-DD
 */
export declare const storeVersion = "2025-02-21";
