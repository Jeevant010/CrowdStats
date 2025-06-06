'use client'
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
const cloneObjectWithOverrides = (original, overrides = {}) => {
    var _a, _b;
    // Get the property descriptors from the original object
    const descriptors = Object.getOwnPropertyDescriptors(original);
    // Create a new object using the same prototype as the original
    const clone = Object.create(Object.getPrototypeOf(original));
    // // Loop through the overrides to redefine any read-only methods
    for (const [key, value] of Object.entries(overrides)) {
        // Redefine the method even if it was read-only on the original object
        Object.defineProperty(clone, key, {
            // Make it writable if necessary
            configurable: true,
            // Allow future modifications
            enumerable: (_b = (_a = descriptors[key]) === null || _a === void 0 ? void 0 : _a.enumerable) !== null && _b !== void 0 ? _b : true,
            value: value,
            writable: true, // Preserve enumerability
        });
    }
    const overridesKeys = Object.keys(overrides);
    // add properties from original object if they're not in overrides
    // if we add all of them, read-only props/methods might not get properly overwritten
    for (const [key, descriptor] of Object.entries(descriptors)) {
        // if has not been overwritten, add original
        if (!overridesKeys.includes(key)) {
            Object.defineProperty(clone, key, descriptor);
        }
    }
    return clone;
};

export { cloneObjectWithOverrides };
