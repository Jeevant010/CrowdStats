/**
 * Type guard assertion function that throws an error if the condition is false.
 * @param value The condition to check
 * @param message The error message to display if assertion fails
 * @throws {Error} If the assertion condition is false
 */
export declare function assertDefined<T>(value: T | null | undefined, message: string): asserts value is T;
