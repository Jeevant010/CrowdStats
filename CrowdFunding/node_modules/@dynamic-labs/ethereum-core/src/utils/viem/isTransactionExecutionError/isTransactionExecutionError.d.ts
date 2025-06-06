/**
 * @description
 * Checks if the error has a `walk` method
 */
export declare const isTransactionExecutionError: <T>(error: unknown) => error is {
    walk: () => T;
};
