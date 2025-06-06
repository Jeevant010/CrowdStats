/**
 * Clones an object and includes properties with `enumerable: false`, unlike the spread
 * operator which will leave these properties out.
 *
 * Optionally pass in overrides to apply to the cloned object.
 *
 * @param original The object to clone
 * @param overrides An object containing properties to override on the cloned object
 * @returns A new object that is a clone of the original object with the specified overrides
 */
export declare const cloneObjectWithOverrides: (original: object, overrides?: {}) => any;
