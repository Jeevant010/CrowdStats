/**
 * Groups an array of items based on a specified key.
 * @template T - The type of items in the array.
 * @param {T[]} items - The array of items to be grouped.
 * @param {keyof T | ((item: T) => string)} keySelector - The key to group the items by.
 *        Can be either a property key of the items or a function that extracts the key from an item.
 * @returns {Object.<string, T[]>} - An object where the keys represent the grouped values,
 *          and the values are arrays of items belonging to that group.
 */
export declare const groupBy: <T>(items: T[], keySelector: keyof T | ((item: T) => string)) => {
    [key: string]: T[];
};
