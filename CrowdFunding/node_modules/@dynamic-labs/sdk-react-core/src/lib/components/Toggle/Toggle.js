'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Toggle = ({ icon, variant = 'primary', value, onChange, dataTestId, className, style, }) => (jsxs("label", { className: classNames('toggle', className), style: style, children: [jsx("input", { type: 'checkbox', className: 'toggle--input', "data-testid": dataTestId, checked: value, onChange: () => onChange === null || onChange === void 0 ? void 0 : onChange(!value) }), jsx("div", { className: classNames('toggle--content', `toggle--content__variant-${variant}`), children: jsx("div", { className: 'toggle--knob', children: icon }) })] }));

export { Toggle };
