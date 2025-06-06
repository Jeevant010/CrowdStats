'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const normalizeNewValue = (currentValue, updatedValue) => {
    if (!currentValue) {
        return updatedValue.split('');
    }
    if (updatedValue.length > 2) {
        return updatedValue.split('');
    }
    if (updatedValue === '') {
        return [];
    }
    if (currentValue[0] === updatedValue[0]) {
        return [updatedValue[1]];
    }
    return [updatedValue[0]];
};
const PinInput = ({ autoFocus, disabled, inputIndex, inputMode, isValidated, name, onChange, pattern, type, value, values, hasError, }) => {
    const inputRef = React.useRef(null);
    const handleChange = (e) => {
        const currentValue = values[inputIndex];
        const updatedValue = e.target.value.replace(/\s+/g, '');
        const newValues = [...values];
        const normalizedValues = normalizeNewValue(currentValue, updatedValue).slice(0, newValues.length - inputIndex);
        const setValues = (normalizedValue, index) => (newValues[inputIndex + index] = normalizedValue);
        const regex = type === 'number' ? /(^$)|(\d+)/ : /.*/;
        const shouldChange = normalizedValues.every((normalizedValue) => regex.test(normalizedValue));
        let inputElement = inputRef.current;
        if (!shouldChange) {
            return;
        }
        if (normalizedValues.length) {
            normalizedValues.forEach(setValues);
        }
        else {
            newValues[inputIndex] = '';
        }
        onChange(newValues);
        // in order to maintain focus after copy/paste action
        // of 1 or many characters, we need to loop through values
        // and set current element to be the next sibling
        for (let i = 0; i < normalizedValues.length; i++) {
            inputElement = inputElement === null || inputElement === void 0 ? void 0 : inputElement.nextElementSibling;
        }
        // if current element is of input type, we can safely focus it
        if (normalizedValues && inputElement instanceof HTMLInputElement) {
            inputElement.focus();
        }
    };
    const handleKeyDown = ({ key, }) => {
        var _a;
        if (key === 'Backspace' && values[inputIndex] === '' && inputIndex > 0) {
            const prevInput = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.previousElementSibling;
            /* istanbul ignore next */
            if (prevInput instanceof HTMLInputElement) {
                prevInput.focus();
            }
        }
    };
    React.useEffect(() => {
        var _a;
        if (autoFocus && inputIndex === 0) {
            (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autoFocus, inputIndex]);
    return (jsxRuntime.jsx("input", { ref: inputRef, className: classNames.classNames('pin-input__input', {
            'pin-input__input--error': Boolean(hasError),
            'pin-input__input--success': Boolean(isValidated),
        }), disabled: disabled, name: name, value: value, onChange: handleChange, onKeyDown: handleKeyDown, "data-testid": inputIndex, pattern: pattern, inputMode: inputMode, tabIndex: 0 }));
};

exports.PinInput = PinInput;
exports.normalizeNewValue = normalizeNewValue;
