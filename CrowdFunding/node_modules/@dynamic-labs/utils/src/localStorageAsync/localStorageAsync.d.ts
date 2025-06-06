export declare const getItemAsync: <T = string>(key: string) => Promise<T | undefined>;
export declare const setItemAsync: <T = string>(key: string, value: T) => Promise<void>;
export declare const removeItemAsync: (key: string) => Promise<void>;
