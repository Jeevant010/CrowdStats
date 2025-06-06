'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Removes duplicate elements from an array.
 *
 * @param {T[]} array - The array to filter for unique elements.
 * @template T - The type of elements in the array.
 * @returns {T[]} A new array containing only the unique elements of the given array.
 *
 * @example
 * // returns [1, 2, 3, 4, 5]
 * uniq([1, 2, 2, 3, 4, 4, 5]);
 *
 * @example
 * // returns ['apple', 'banana', 'orange']
 * uniq(['apple', 'banana', 'apple', 'orange']);
 *
 */
const uniq = (array) => {
    const seen = new Set();
    return array.filter((item) => {
        if (seen.has(item)) {
            return false;
        }
        seen.add(item);
        return true;
    });
};

exports.uniq = uniq;
