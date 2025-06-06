'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../logger/logger.cjs');

/* eslint-disable multiline-comment-style */
const defaultCancel = () => {
    logger.logger.error("Tried to cancel CancellablePromise without ever assigning it's '_cancel' method");
};
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
class CancellablePromise extends Promise {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    internalCancel(reason) {
        defaultCancel();
    }
    constructor(executor) {
        let superReject = defaultCancel;
        let superResolve = () => { };
        super((resolve, reject) => {
            superReject = reject;
            superResolve = resolve;
        });
        this.internalIsCancelled = false;
        this.isSettled = false;
        executor((value) => {
            if (!this.isCancelled && !this.isSettled)
                superResolve(value);
            this.isSettled = true;
        }, (reason) => {
            if (!this.isCancelled && !this.isSettled)
                superReject(reason);
            this.isSettled = true;
        });
        this.internalCancel = superReject;
    }
    /** Whether this CancellablePromise was cancelled. */
    get isCancelled() {
        return this.internalIsCancelled;
    }
    /** Cancels the promise. This causes the promise to reject with { wasCancelled: true, reason: reason }
     * where the reason is the provided argument.
     * @returns The cancelled promise.
     */
    cancel(reason) {
        if (this.isSettled)
            return this;
        this.internalIsCancelled = true;
        this.internalCancel(reason);
        this.isSettled = true;
        return this;
    }
    internalOnCancel(listener, options) {
        const newPromise = new CancellablePromise((resolve, reject) => {
            this.internalThen(resolve, ({ wasCancelled, reason }) => {
                if (wasCancelled)
                    resolve(listener(reason));
                else
                    reject(reason);
            }, { ignoreOnCancel: true });
        });
        /** Tie the new promise's cancel to this promise's cancel */
        if (!(options === null || options === void 0 ? void 0 : options.ignoreOnCancel)) {
            newPromise.internalOnCancel((reason) => {
                this.cancel(reason);
            }, { ignoreOnCancel: true });
        }
        return newPromise;
    }
    /** Allows reacting to this CancellablePromise being cancelled  */
    onCancel(listener) {
        return this.internalOnCancel(listener);
    }
    internalThen(onFulfilled, onRejected, options) {
        /** Create a catch handler that is undefined if the received callback is undefined */
        const catchHandler = onRejected
            ? (reason) => onRejected({ reason, wasCancelled: this.isCancelled })
            : onRejected;
        // /** Create the CancellablePromise we will returned, associated to the then promise */
        const newPromise = CancellablePromise.fromPromise(super.then(onFulfilled, catchHandler));
        /** Tie the new promise's cancel to this promise's cancel */
        if (!(options === null || options === void 0 ? void 0 : options.ignoreOnCancel)) {
            newPromise.internalOnCancel((reason) => {
                this.cancel(reason);
            }, { ignoreOnCancel: true });
        }
        return newPromise;
    }
    then(onFulfilled, onRejected) {
        return this.internalThen(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    finally(onFinally) {
        return this.then((value) => {
            onFinally === null || onFinally === void 0 ? void 0 : onFinally();
            return value;
        }, (reason) => {
            onFinally === null || onFinally === void 0 ? void 0 : onFinally();
            throw reason;
        });
    }
    /** Generates a CancellablePromise from a Promise. If a CancellablePromise is passed, it's returned unscathed.
     * WARNING: unless you attach a method to reject the original Promise with the "onCancel" param.
     * cancelling the resulting CancellablePromise does NOT affect the original Promise. */
    static fromPromise(promise) {
        if ('internalIsCancelled' in promise)
            return promise;
        const newPromise = new CancellablePromise((resolve, reject) => promise.then(resolve, reject));
        return newPromise;
    }
}

exports.CancellablePromise = CancellablePromise;
