export type ConvertBigIntToString<T> = T extends bigint ? string : T extends Array<infer U> ? Array<ConvertBigIntToString<U>> : T extends object ? {
    [K in keyof T]: ConvertBigIntToString<T[K]>;
} : T;
