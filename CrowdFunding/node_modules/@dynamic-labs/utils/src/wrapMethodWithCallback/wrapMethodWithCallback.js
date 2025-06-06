'use client'
/**
 * Wraps an existing method of an object with a callback function. This allows for additional
 * processing or behavior to be executed around the original method. The original method is
 * called within the callback, and its parameters and return value can be accessed and/or modified.
 *
 * @template T - The type of the object whose method is being wrapped.
 * @template K - The key type of the method within the object.
 * @template F - The type of the function, inferred from the method of the object.
 *
 * @param {T} obj - The object containing the method to be wrapped.
 * @param {K} key - The key of the method in the object to be wrapped.
 * @param {(original: F, ...args: Parameters<F>) => ReturnType<F>} callback - The callback
 *        function to wrap around the original method. It receive1`s the original method and its
 *        parameters as arguments.
 *
 * @returns {void} - The function does not return a value; it modifies the method of the object in place.
 *
 * @example
 * // Example usage
 * const myObject = {
 *   greet(name) {
 *     return `Hello, ${name}!`;
 *   }
 * };
 *
 * wrapMethodWithCallback(myObject, 'greet', (original, ...args) => {
 *   console.log('Greet method called with args:', args);
 *   return original(...args).toUpperCase();
 * });
 *
 * console.log(myObject.greet('Alice')); // Logs: 'Greet method called with args: ["Alice"]'
 *                                      // Returns: 'HELLO, ALICE!'
 */
const wrapMethodWithCallback = (obj, key, callback) => {
    const original = obj[key];
    const boundOriginal = original.bind(obj);
    Object.assign(obj, {
        [key]: (...args) => callback(boundOriginal, ...args),
    });
};

export { wrapMethodWithCallback };
