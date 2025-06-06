'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @description
 * Checks if the error has a `walk` method
 */
const isTransactionExecutionError = (error) => error !== undefined &&
    error !== null &&
    typeof error === 'object' &&
    'walk' in error &&
    typeof error['walk'] === 'function';

exports.isTransactionExecutionError = isTransactionExecutionError;
