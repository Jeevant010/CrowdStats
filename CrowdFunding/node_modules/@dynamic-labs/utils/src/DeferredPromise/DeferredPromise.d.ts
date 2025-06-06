/**
 * A DeferredPromise provides methods to manually resolve or reject a Promise.
 * This is useful in scenarios where you need to resolve or reject a Promise
 * outside of the executor function.
 *
 * @template T The type of the value with which the promise will be resolved.
 */
export declare class DeferredPromise<T> {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    constructor();
}
