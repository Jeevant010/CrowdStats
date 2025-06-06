'use client'
/**
 * Retrieves the last item from an array.
 *
 * @template T - The type of the items in the array.
 * @param {T[]} arr - The array from which to retrieve the last item.
 * @returns {T | undefined} The last item in the array, or undefined if the array is empty.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * console.log(last(numbers));  // Outputs: 5
 *
 * const emptyArray: number[] = [];
 * console.log(last(emptyArray));  // Outputs: undefined
 */
const last = (arr) => arr.length > 0 ? arr[arr.length - 1] : undefined;

export { last };
