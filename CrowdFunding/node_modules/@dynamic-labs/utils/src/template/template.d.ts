type ExtractPlaceholders<T extends string> = T extends `${infer _Start}{{${infer Placeholder}}}${infer Rest}` ? Placeholder | ExtractPlaceholders<Rest> : never;
/**
 * Creates a template function that replaces placeholders with corresponding values from a data object.
 * @param {string} templateText - The template string containing placeholders in the form {{placeholder}}.
 * @returns {(data) => string} - A function that replaces the placeholders with the values from the data object.
 *
 * @example
 * // Basic usage
 * const compiled = template('Test text {{placeholder}} value');
 * console.log(compiled({ placeholder: 'test' })); // Output: 'Test text test value'
 *
 * @example
 * // Multiple placeholders
 * const compiled = template('Test text {{placeholder}} value {{placeholder2}}');
 * console.log(compiled({ placeholder: 'test', placeholder2: 'test2' })); // Output: 'Test text test value test2'
 */
export declare const template: <T extends string>(templateText: T) => (data: { [key in ExtractPlaceholders<T>]: string; }) => string;
export {};
