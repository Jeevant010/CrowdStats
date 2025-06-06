'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const RadioButton = ({ children, checked, value, name, disabled = false, className = '', onChange, }) => {
    const radioId = `${name}_${value}`;
    return (jsxs("div", { className: classNames('radio-button', className), children: [jsx("input", { type: 'radio', id: radioId, name: name, value: value, disabled: disabled, defaultChecked: checked, onChange: onChange }), jsx("label", { htmlFor: radioId, children: children })] }));
};

export { RadioButton };
