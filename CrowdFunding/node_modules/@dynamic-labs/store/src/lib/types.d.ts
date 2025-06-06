export type StoreApi<T extends object> = {
    getState: () => T;
    setState: (partialState: Partial<T>) => void;
    getInitialState: () => T;
    subscribe: (subscription: (state: T) => void) => () => void;
};
