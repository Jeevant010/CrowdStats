'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var consts = require('../../consts.cjs');
var convertScientificToDecimal = require('./convertScientificToDecimal/convertScientificToDecimal.cjs');

/* eslint-disable prefer-destructuring */
const categorizeValue = (value) => {
    if (Number.isNaN(value))
        return { symbol: '', value: 0 };
    if (value >= 1e15)
        return '>999T';
    if (value >= 1e12)
        return { symbol: 'T', value: Math.round(value / 1e11) / 10 };
    if (value >= 1e9)
        return { symbol: 'B', value: Math.round(value / 1e8) / 10 };
    if (value >= 1e6)
        return { symbol: 'M', value: Math.round(value / 1e5) / 10 };
    return { symbol: '', value };
};
const addSymbol = (value, symbol) => {
    if (!symbol)
        return value;
    if (symbol === 'USD')
        return `$${value}`;
    return `${value} ${symbol}`;
};
const formatValue = ({ value, symbol, withFixedZeros = false, maxDecimals, }) => {
    if (value === consts.UNAVAILABLE_VALUE)
        return addSymbol(consts.UNAVAILABLE_VALUE, symbol);
    if (value === undefined)
        return undefined;
    const parsed = value === '' ? 0 : parseFloat(value.toString());
    // Deal with 0 values so we can assume value is not zero from here on
    if (parsed === 0)
        return addSymbol(withFixedZeros && maxDecimals ? (0).toFixed(maxDecimals) : '0', symbol);
    const categorized = categorizeValue(parsed);
    const categorySymbol = typeof categorized === 'object' ? categorized.symbol : '';
    if (typeof categorized === 'string')
        return addSymbol(categorized + categorySymbol, symbol);
    const expandedValue = convertScientificToDecimal.convertScientificToDecimal(categorized.value);
    let [integerPart, decimalPart] = expandedValue.split('.');
    if (maxDecimals !== undefined) {
        const [roundedInteger, roundedDecimal] = parseFloat(`0.${decimalPart}`)
            .toFixed(maxDecimals)
            .split('.');
        decimalPart = withFixedZeros
            ? roundedDecimal
            : roundedDecimal.replace(/0+$/, '');
        if (roundedInteger !== '0') {
            integerPart = convertScientificToDecimal.convertScientificToDecimal(parseFloat(integerPart) + parseFloat(roundedInteger));
        }
    }
    // Add commas
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedValue = decimalPart
        ? `${integerPart}.${decimalPart}`
        : integerPart;
    // If we ended up with 0 after all rounding, show less than symbol
    if (maxDecimals && parseFloat(formattedValue) === 0) {
        const number = `${(0).toFixed(maxDecimals - 1)}1`;
        return `<${addSymbol(number, symbol)}`;
    }
    return addSymbol(formattedValue + categorySymbol, symbol);
};

exports.formatValue = formatValue;
