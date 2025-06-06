import { StoreApi } from '../types';
export type PersistStorage = {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
};
type CreatePersistProps<TStore extends object> = {
    name: string;
    version?: string;
    storage: PersistStorage;
    partialize: (state: TStore) => Partial<TStore>;
    store: StoreApi<TStore>;
};
/**
 * Creates a persist middleware that saves the store state to the storage.
 */
export declare const persist: <TStore extends object>({ name, version, storage, store, partialize, }: CreatePersistProps<TStore>) => StoreApi<TStore>;
export {};
