type ResolveFetcherOptions = {
    retries?: number;
};
export declare const resolveFetcher: <E, T>(fetcher: () => T | Promise<T>, { retries }: ResolveFetcherOptions, callback: (err: E | undefined, data: T | undefined) => void) => Promise<T | undefined>;
export {};
