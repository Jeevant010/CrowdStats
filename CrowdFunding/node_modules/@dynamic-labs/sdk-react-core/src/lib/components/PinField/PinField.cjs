'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var PinInput = require('../PinInput/PinInput.cjs');

const isComplete = (values) => values.every((value) => value);
const PinField = ({ handleComplete, initialValue, inputMode, isLoading, isValidated, pattern, type = 'number', hasError, onChange, disabled, }) => {
    const containerRef = React.useRef(null);
    const [values, setValues] = React.useState(initialValue);
    const handleOnChange = (values) => {
        const value = values.join('');
        setValues(values);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        if (isComplete(values)) {
            handleComplete(value);
        }
    };
    // Required to listen for errors and refocus on the first element
    React.useEffect(() => {
        var _a, _b;
        if (hasError) {
            setValues(initialValue);
            (_b = (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('input').item(0)) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [hasError, initialValue, containerRef]);
    return (jsxRuntime.jsx("div", { className: 'pin-field__container', ref: containerRef, children: values.map((value, index) => (jsxRuntime.jsx(PinInput.PinInput, { values: values, inputIndex: index, value: value, onChange: handleOnChange, disabled: isLoading || disabled, inputMode: inputMode, isValidated: isValidated, pattern: pattern, type: type, autoFocus: true, hasError: hasError }, `pin_input_${index}`))) }));
};

exports.PinField = PinField;
