type Func<T, U> = (input: T) => U;
/**
 * Creates a chainable function that allows adding additional transformations
 * or operations via the `pipe` method, where each function in the chain
 * can operate on the output type of the previous function.
 * @param initialFunc The initial function to start the chain.
 *  @returns An object representing the chain of functions. The returned object
 * has a `pipe` method to add more functions to the chain and can be invoked
 * directly to execute the chain of functions with an input.
 * @example
 * ```
 * // Define a function that increments its input
 * const increment = (x: number) => x + 1;
 * // Create a function chain starting with the increment function
 * const chain = createFnPipe(increment)
 *   .pipe(x => x * 2) // After incrementing, multiply the result by 2
 *   .pipe(x => `Result: ${x}`); // Then, convert the number to a string with a prefix
 *
 * console.log(chain(3)); // Output: "Result: 8"
 * ```
 */
export declare const pipe: <T, U>(initialFunc: Func<T, U>) => Func<T, U> & {
    pipe: <V>(newFunc: Func<U, V>) => Func<T, V> & {
        pipe: any;
    };
};
export {};
