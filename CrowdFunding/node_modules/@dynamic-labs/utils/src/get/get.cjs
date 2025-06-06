'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Retrieves the value at the given path of an object.
 * @param obj - The object from which to extract the value.
 * @param path - The path to the desired value within the object, using dot notation.
 * @returns The value from the specified path, or undefined if the path is not valid.
 */
const get = (obj, path) => {
    try {
        // Split the path into keys considering special characters as part of the keys
        const keys = path.match(/[^.[\]"']+/g) || [];
        return keys.reduce((acc, key) => acc[key], obj);
    }
    catch (error) {
        // If there is an error accessing the properties, return undefined
        return undefined;
    }
};

exports.get = get;
