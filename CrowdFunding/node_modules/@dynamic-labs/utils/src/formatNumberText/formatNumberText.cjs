'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ceil = require('../ceil/ceil.cjs');
var trimEnd = require('../trimEnd/trimEnd.cjs');

const formatNumberText = (value, { precision = 0 } = {}) => {
    if (!precision) {
        return value;
    }
    const floatValue = parseFloat(value);
    const formattedAtPrecision = ceil.ceil(floatValue, precision).toFixed(precision);
    const [integerPart, decimalPart] = formattedAtPrecision.split('.');
    const decimalPartTrimmed = trimEnd.trimEnd(decimalPart, '0');
    return `${integerPart}.${decimalPartTrimmed || '0'}`;
};

exports.formatNumberText = formatNumberText;
