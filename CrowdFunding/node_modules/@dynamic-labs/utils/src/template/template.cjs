'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Creates a template function that replaces placeholders with corresponding values from a data object.
 * @param {string} templateText - The template string containing placeholders in the form {{placeholder}}.
 * @returns {(data) => string} - A function that replaces the placeholders with the values from the data object.
 *
 * @example
 * // Basic usage
 * const compiled = template('Test text {{placeholder}} value');
 * console.log(compiled({ placeholder: 'test' })); // Output: 'Test text test value'
 *
 * @example
 * // Multiple placeholders
 * const compiled = template('Test text {{placeholder}} value {{placeholder2}}');
 * console.log(compiled({ placeholder: 'test', placeholder2: 'test2' })); // Output: 'Test text test value test2'
 */
const template = (templateText) => {
    return (data) => templateText.replace(/{{(\w+?)}}/g, (match, key) => key in data ? data[key] : match);
};

exports.template = template;
