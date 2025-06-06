/**
 * Converts a scientific notation number to a decimal number.
 *
 * It might be simpler to just call "toFixed", however, "toFixed" will return
 * incorrect values for numbers that are too large or too small.
 * Try (9.1).toFixed(16) and see for yourself.
 */
export declare const convertScientificToDecimal: (value: number) => string;
