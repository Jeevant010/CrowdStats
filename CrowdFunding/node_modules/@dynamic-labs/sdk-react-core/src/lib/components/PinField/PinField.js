'use client'
import { jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { PinInput } from '../PinInput/PinInput.js';

const isComplete = (values) => values.every((value) => value);
const PinField = ({ handleComplete, initialValue, inputMode, isLoading, isValidated, pattern, type = 'number', hasError, onChange, disabled, }) => {
    const containerRef = useRef(null);
    const [values, setValues] = useState(initialValue);
    const handleOnChange = (values) => {
        const value = values.join('');
        setValues(values);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        if (isComplete(values)) {
            handleComplete(value);
        }
    };
    // Required to listen for errors and refocus on the first element
    useEffect(() => {
        var _a, _b;
        if (hasError) {
            setValues(initialValue);
            (_b = (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('input').item(0)) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [hasError, initialValue, containerRef]);
    return (jsx("div", { className: 'pin-field__container', ref: containerRef, children: values.map((value, index) => (jsx(PinInput, { values: values, inputIndex: index, value: value, onChange: handleOnChange, disabled: isLoading || disabled, inputMode: inputMode, isValidated: isValidated, pattern: pattern, type: type, autoFocus: true, hasError: hasError }, `pin_input_${index}`))) }));
};

export { PinField };
