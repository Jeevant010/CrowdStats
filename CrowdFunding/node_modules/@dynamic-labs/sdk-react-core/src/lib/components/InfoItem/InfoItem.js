'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Typography } from '../Typography/Typography.js';

const InfoItem = ({ title, content, Icon, className = '', iconClassName = '', textClassName = '', }) => (jsxs("div", { className: classNames('info-item__container', className), children: [jsx("div", { className: classNames('info-item__icon-container', iconClassName, {
                'icon-container--has-content': Boolean(content),
            }), children: jsx(Icon, {}) }), jsxs("div", { children: [jsx(Typography, { as: 'h2', className: textClassName, variant: 'body_normal', color: 'primary', weight: 'medium', children: title }), content && (jsx(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', className: 'info-item__secondary-text', children: content }))] })] }));

export { InfoItem };
