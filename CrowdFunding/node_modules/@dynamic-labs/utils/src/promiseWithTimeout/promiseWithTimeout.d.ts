type PromiseWithTimeoutOptions = {
    timeoutMessage?: string;
};
export declare const promiseWithTimeout: <T>(promise: Promise<T>, ms: number, { timeoutMessage }?: PromiseWithTimeoutOptions) => Promise<T>;
export {};
