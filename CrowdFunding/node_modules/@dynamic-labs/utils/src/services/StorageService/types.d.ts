export type IStorageService = {
    getItem: <T = string>(key: string) => T | null;
    setItem: <T>(key: string, value: T) => void;
    removeItem: (key: string) => void;
    getKeys: () => string[];
};
