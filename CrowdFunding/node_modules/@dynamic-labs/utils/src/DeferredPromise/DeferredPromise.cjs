'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * A DeferredPromise provides methods to manually resolve or reject a Promise.
 * This is useful in scenarios where you need to resolve or reject a Promise
 * outside of the executor function.
 *
 * @template T The type of the value with which the promise will be resolved.
 */
class DeferredPromise {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

exports.DeferredPromise = DeferredPromise;
