'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const deepMerge = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        // If either obj1 or obj2 is not an object, return obj1
        return obj2;
    }
    // Create a new object to store the merged result
    const result = Object.assign({}, obj1);
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (typeof obj2[key] === 'object' &&
                Object.prototype.hasOwnProperty.call(obj1, key) &&
                typeof obj1[key] === 'object') {
                // If both obj1 and obj2 have objects with the same key, recursively merge them
                result[key] = deepMerge(obj1[key], obj2[key]);
            }
            else {
                // Otherwise, simply assign the value from obj2 to the result
                result[key] = obj2[key];
            }
        }
    }
    return result;
};
// Example usage:
//
// const obj1 = {
// a: 1,
// b: {
//     c: 2,
//     d: 3,
// },
// };
//
// const obj2 = {
// a: 4,
// b: {
//     c: 5,
// },
// e: 6,
// };
//
// const result = {
// a: 4,
// b: {
//     c: 5,
//     d: 3,
// },
// e: 6,
// };
//

exports.deepMerge = deepMerge;
