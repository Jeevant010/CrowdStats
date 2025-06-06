/**
 * Delays the execution of subsequent code by a specified amount of time.
 * If a value is provided, the promise will resolve with that value after the timeout.
 *
 * @template T - The type of the value to resolve with.
 * @param {number} timeoutMs - The number of milliseconds to delay.
 * @param {T} [valueToResolve] - Optional value to resolve the promise with after the timeout.
 * @returns {Promise<T | void>} - Resolves after the specified timeout with valueToResolve or void.
 */
export declare function sleep(timeoutMs: number): Promise<void>;
export declare function sleep<T>(timeoutMs: number, valueToResolve: T): Promise<T>;
