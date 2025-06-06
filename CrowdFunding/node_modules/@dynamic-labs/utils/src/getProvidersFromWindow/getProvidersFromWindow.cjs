'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * return the destination (value)
 *
 * @param {string} path - path in the obj to the item
 * @returns {T[]} - array of found items
 */
const getProvidersFromWindow = (path) => {
    const splitPath = path.split('.');
    let result = window;
    const foundProviders = [];
    for (const [index, p] of Object.entries(splitPath)) {
        result = result[p];
        if (typeof result !== 'object' || result === null) {
            return [];
        }
        // we need to check if we have hit the end of the requested path
        if (Number(index) === splitPath.length - 1) {
            if (Array.isArray(result)) {
                result.forEach((p) => foundProviders.push(p));
            }
            else {
                if (result.providers) {
                    result.providers.forEach((p) => foundProviders.push(p));
                }
                else {
                    foundProviders.push(result);
                }
            }
        }
    }
    return foundProviders;
};

exports.getProvidersFromWindow = getProvidersFromWindow;
