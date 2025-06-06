'use client'
/**
 * Converts a scientific notation number to a decimal number.
 *
 * It might be simpler to just call "toFixed", however, "toFixed" will return
 * incorrect values for numbers that are too large or too small.
 * Try (9.1).toFixed(16) and see for yourself.
 */
const convertScientificToDecimal = (value) => {
    const str = value.toString();
    // If the number is already in standard form (no 'e'), return it
    if (!str.includes('e'))
        return str;
    const [base, exponent] = str.split('e').map(parseFloat);
    const isNegativeExp = exponent < 0;
    const absoluteExponent = Math.abs(exponent);
    const absoluteBase = Math.abs(base).toString();
    if (isNegativeExp) {
        // Move the decimal point to the left
        const newNumber = '0.' + '0'.repeat(absoluteExponent - 1) + absoluteBase.replace('.', '');
        return value < 0 ? '-' + newNumber : newNumber;
    }
    // Move the decimal point to the right
    const [intPart, decimalPart = ''] = absoluteBase.split('.');
    const newNumber = intPart + decimalPart.padEnd(absoluteExponent, '0');
    return value < 0 ? '-' + newNumber : newNumber;
};

export { convertScientificToDecimal };
