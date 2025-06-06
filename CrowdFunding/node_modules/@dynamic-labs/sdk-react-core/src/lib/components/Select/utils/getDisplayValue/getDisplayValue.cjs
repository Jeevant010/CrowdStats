'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getDisplayValue = (element) => {
    if (!element)
        return;
    const { selectedIndex } = element;
    if (selectedIndex === undefined)
        return;
    const option = element.options[selectedIndex];
    if (!option.hasAttribute('value'))
        return;
    return option.text;
};

exports.getDisplayValue = getDisplayValue;
