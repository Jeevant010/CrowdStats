'use client'
/**
 * @description
 * Checks if the error has a `walk` method
 */
const isTransactionExecutionError = (error) => error !== undefined &&
    error !== null &&
    typeof error === 'object' &&
    'walk' in error &&
    typeof error['walk'] === 'function';

export { isTransactionExecutionError };
