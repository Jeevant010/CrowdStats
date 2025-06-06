'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');

/**
 * Safely executes a callback function.
 * @template T The type of the callback's return value.
 * @template E The type of the error.
 * @param {() => Promise<T> | T} callback A function that might throw an error.
 * @returns {Promise<[T | undefined, E | undefined]>} A tuple with either the result or the error.
 */
const runSafe = (callback) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const resolved = yield callback();
        return [resolved, undefined];
    }
    catch (error) {
        return [undefined, error];
    }
});

exports.runSafe = runSafe;
