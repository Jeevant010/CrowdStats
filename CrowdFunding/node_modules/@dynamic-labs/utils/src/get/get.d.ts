/**
 * Retrieves the value at the given path of an object.
 * @param obj - The object from which to extract the value.
 * @param path - The path to the desired value within the object, using dot notation.
 * @returns The value from the specified path, or undefined if the path is not valid.
 */
export declare const get: <T = any>(obj: Record<string, any>, path: string) => T | undefined;
