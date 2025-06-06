'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const roundToNthDecimal = (value, decimal) => {
    if (!value)
        return;
    const factor = Math.pow(10, decimal);
    const rounded = Math.round(value * factor) / factor;
    const zeros = '0'.repeat(decimal - 1);
    return rounded === 0 ? `<0.${zeros}1` : rounded;
};

exports.roundToNthDecimal = roundToNthDecimal;
