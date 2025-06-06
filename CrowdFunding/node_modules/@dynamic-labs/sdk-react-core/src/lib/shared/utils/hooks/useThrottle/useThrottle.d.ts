/**
 * useThrottle hook to throttle a callback function.
 *
 * @param callback - The callback function to be throttled. It must return void.
 * @param delay - The time in milliseconds to wait before the next call.
 * @returns A throttled version of the callback function.
 */
export declare const useThrottle: <T extends (...args: any[]) => void>(callback: T, delay: number) => ((...args: Parameters<T>) => void);
