'use client'
import { ceil } from '../ceil/ceil.js';
import { trimEnd } from '../trimEnd/trimEnd.js';

const formatNumberText = (value, { precision = 0 } = {}) => {
    if (!precision) {
        return value;
    }
    const floatValue = parseFloat(value);
    const formattedAtPrecision = ceil(floatValue, precision).toFixed(precision);
    const [integerPart, decimalPart] = formattedAtPrecision.split('.');
    const decimalPartTrimmed = trimEnd(decimalPart, '0');
    return `${integerPart}.${decimalPartTrimmed || '0'}`;
};

export { formatNumberText };
