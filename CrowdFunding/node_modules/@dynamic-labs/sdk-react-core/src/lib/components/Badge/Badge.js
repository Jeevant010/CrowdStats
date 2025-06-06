'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Badge = ({ className = '', dot, text, copykey, variant = 'secondary', }) => (jsxs("div", { className: classNames('badge__container', `badge__container__${variant}`, className), children: [dot && jsx("span", { "data-testid": 'badge__dot', className: 'badge__dot' }), jsx("span", { copykey: copykey, children: text })] }));

export { Badge };
