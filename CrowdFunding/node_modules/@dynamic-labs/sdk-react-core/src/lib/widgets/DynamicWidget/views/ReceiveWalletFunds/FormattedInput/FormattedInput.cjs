'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../../../../utils/functions/classNames/classNames.cjs');
var consts = require('../consts.cjs');

const FormattedInput = ({ value, onChange, leading, trailing, className, style, onInteraction, emitter, locked, }) => {
    var _a, _b;
    const id = React.useId();
    const cursorPosition = React.useRef(0);
    const [inputRef, _setInputRef] = React.useState(null);
    const setInputRef = (ref) => {
        _setInputRef(ref);
        // When we first populate this ref, we want to focus it
        if (!ref || inputRef)
            return;
        resetCursorToEnd(ref);
    };
    const setCursorPosition = (position) => {
        requestAnimationFrame(() => {
            if (!inputRef)
                return;
            inputRef.focus();
            inputRef.setSelectionRange(position, position);
        });
    };
    const resetCursorToEnd = React.useCallback((ref = inputRef) => {
        if (!ref)
            return;
        ref.focus();
        ref.setSelectionRange(ref.value.length, ref.value.length);
    }, [inputRef]);
    const handleCursorPosition = () => {
        if (!inputRef)
            return;
        if (inputRef.selectionStart)
            cursorPosition.current = inputRef.selectionStart;
    };
    const handleInputChange = (e) => {
        onInteraction === null || onInteraction === void 0 ? void 0 : onInteraction();
        const amountNumber = e.target.value
            .replace(/[^\d.]/g, '')
            .slice(0, consts.MAX_DISPLAY_LENGTH);
        // When nothing changes, ensure the cursor stays put
        if (amountNumber === value) {
            setCursorPosition(cursorPosition.current);
            return;
        }
        // If there are multiple decimal points, keep only the new one
        const decimalCount = amountNumber.split('.').length - 1;
        let decimalValidated = amountNumber;
        if (decimalCount > 1) {
            // Find position of the new decimal point by comparing with previous value
            const newDecimalIndex = amountNumber
                .split('')
                .findIndex((char, i) => char === '.' && value[i] !== '.');
            // Keep only the new decimal point
            decimalValidated = amountNumber
                .split('')
                .filter((char, i) => char !== '.' || i === newDecimalIndex)
                .join('');
            // Set the cursor to after the new decimal point
            setCursorPosition(value.indexOf('.') > newDecimalIndex
                ? newDecimalIndex + 1
                : newDecimalIndex);
        }
        onChange(decimalValidated);
        handleCursorPosition();
    };
    React.useEffect(() => {
        emitter === null || emitter === void 0 ? void 0 : emitter.on('focus', resetCursorToEnd);
        return () => {
            emitter === null || emitter === void 0 ? void 0 : emitter.off('focus', resetCursorToEnd);
        };
    }, [emitter, resetCursorToEnd]);
    return (jsxRuntime.jsxs("label", { className: classNames.classNames(className, 'formatted-input'), 
        // 0 and 1 length should be the same because placeholder is '0'
        style: Object.assign(Object.assign({}, style), { '--char-count': (value.length || 1) +
                ((_a = leading === null || leading === void 0 ? void 0 : leading.length) !== null && _a !== void 0 ? _a : 0) +
                ((_b = trailing === null || trailing === void 0 ? void 0 : trailing.length) !== null && _b !== void 0 ? _b : 0) }), htmlFor: id, children: [leading && (jsxRuntime.jsx("label", { htmlFor: id, className: classNames.classNames('formatted-input__leading', {
                    'formatted-input__leading--secondary': value === '',
                }), children: leading })), jsxRuntime.jsxs("div", { className: 'formatted-input__input-container', children: [!locked && (jsxRuntime.jsx("input", { ref: setInputRef, value: value, onChange: handleInputChange, placeholder: '0', onKeyUp: handleCursorPosition, onClick: handleCursorPosition, className: 'formatted-input__input-container__input', id: id, "data-testid": 'formatted-input' })), jsxRuntime.jsx("label", { htmlFor: id, className: classNames.classNames('formatted-input__input-container__ghost-text', {
                            'formatted-input__input-container__ghost-text--visible': locked,
                        }), "data-testid": 'formatted-input-ghost-text', children: value === '' ? '0' : value })] }), trailing && (jsxRuntime.jsx("label", { htmlFor: id, className: 'formatted-input__trailing', children: trailing }))] }));
};

exports.FormattedInput = FormattedInput;
