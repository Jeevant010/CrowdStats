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
export declare const uniq: <T>(array: T[]) => T[];
