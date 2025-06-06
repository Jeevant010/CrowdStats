type Executor<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void;
type CancelListener<TResult = never> = (reason?: unknown) => TResult;
/** An extension of Promise that allows you to explicitly cancel a promise with an external reference to it.
 * Cancelling CancellablePromise causes it to reject with reason set to the parameter passed to the cancel method.
 * When CancellablePromise rejects, it provides a boolean to indicate whether it was cancelled, alongside the reason.
 *
 * @example
 * // Cancelling this promise
 * const promise = new CancellablePromise(() => {}).onCancel(console.log)
 * promise.cancel('User cancelled')
 *
 * // Setting up listeners for resolve, cancel and reject
 * // (notice calling catch after onCancel prevents catch from being called by cancellation)
 * new CancellablePromise(() => {})
 *  .then(() => console.log('Promise resolved'))
 *  .onCancel(() => console.log('Promise was cancelled'))
 *  .catch(() => console.log('Promise was rejected but NOT cancelled'))
 *
 * // Telling whether catch was cause of cancel or not
 * new CancellablePromise(() => {})
 *  .then(() => console.log('Promise resolved'))
 *  .catch(({ reason, wasCancelled }) => console.log('Promise was rejected. Cancelled: ' + wasCancelled))
 */
export declare class CancellablePromise<T> extends Promise<T> {
    private internalIsCancelled;
    private isSettled;
    private internalCancel;
    constructor(executor: Executor<T>);
    /** Whether this CancellablePromise was cancelled. */
    get isCancelled(): boolean;
    /** Cancels the promise. This causes the promise to reject with { wasCancelled: true, reason: reason }
     * where the reason is the provided argument.
     * @returns The cancelled promise.
     */
    cancel(reason?: unknown): this;
    private internalOnCancel;
    /** Allows reacting to this CancellablePromise being cancelled  */
    onCancel<TResult = never>(listener: CancelListener<TResult>): CancellablePromise<T | TResult>;
    private internalThen;
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onRejected?: ((reason: {
        reason: unknown;
        wasCancelled: boolean;
    }) => TResult2 | PromiseLike<TResult2>) | null): CancellablePromise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected?: ((reason: {
        reason: unknown;
        wasCancelled: boolean;
    }) => TResult | PromiseLike<TResult>) | null): CancellablePromise<T | TResult>;
    finally(onFinally?: (() => void) | null): CancellablePromise<T>;
    /** Generates a CancellablePromise from a Promise. If a CancellablePromise is passed, it's returned unscathed.
     * WARNING: unless you attach a method to reject the original Promise with the "onCancel" param.
     * cancelling the resulting CancellablePromise does NOT affect the original Promise. */
    static fromPromise<T>(promise: Promise<T> | CancellablePromise<T>): CancellablePromise<T>;
}
export {};
