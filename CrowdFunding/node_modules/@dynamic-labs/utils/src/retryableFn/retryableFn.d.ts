export declare const FALLBACK_UNDEFINED = "FALLBACK_UNDEFINED";
export type RetryableFnOptions<T> = {
    /** Maximum number of retry attempts before returning fallbackValue */
    maxRetries?: number;
    /** Internal only. Do not use */
    currentRetry?: number;
    /** Timeout in ms to wait before executing retryStrategy */
    timeoutMs?: number;
    /** The value to fallback to when function rejects or times out */
    fallbackValue?: T | Error | typeof FALLBACK_UNDEFINED;
    /** Configure whether the fn should be retried only on timeout, only on rejection, or both */
    retryStrategy?: 'timeout-only' | 'rejection-only' | 'timeout-and-rejection';
    /** Ms to wait before a retry */
    retryIntervalMs?: number;
};
export declare const retryableFn: <T>(fn: () => Promise<T>, options?: RetryableFnOptions<T>) => Promise<T>;
