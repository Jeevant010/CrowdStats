'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Typography } from '../Typography/Typography.js';

const ListTile = ({ children, onClick, leading, disabled = false, trailing, style, className = '', dataTestId, copykey, }) => (jsxs("button", { "data-testid": dataTestId, type: 'button', className: classNames(className, 'list-tile'), onClick: onClick, style: style, disabled: disabled, children: [leading, jsx("div", { className: 'list-tile__children', children: jsx(Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', as: 'span', copykey: copykey, children: children }) }), trailing] }));

export { ListTile };
