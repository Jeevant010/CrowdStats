export type CreatePartialSetterParams<T extends Record<string, any>> = {
    get: () => T;
    set: (value: T) => void;
};
export declare const createPartialStoreSetter: <T extends Record<string, any>>({ get, set }: CreatePartialSetterParams<T>) => <K extends Extract<keyof T, string>>(key: K, value: T[K]) => void;
