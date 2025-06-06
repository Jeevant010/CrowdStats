'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Type guard assertion function that throws an error if the condition is false.
 * @param value The condition to check
 * @param message The error message to display if assertion fails
 * @throws {Error} If the assertion condition is false
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function assertDefined(value, message) {
    if (!value) {
        throw new Error(message);
    }
}

exports.assertDefined = assertDefined;
