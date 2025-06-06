/**
 * Safely executes a callback function.
 * @template T The type of the callback's return value.
 * @template E The type of the error.
 * @param {() => Promise<T> | T} callback A function that might throw an error.
 * @returns {Promise<[T | undefined, E | undefined]>} A tuple with either the result or the error.
 */
export declare const runSafe: <T, E>(callback: () => Promise<T> | T) => Promise<[T | undefined, E | undefined]>;
