'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography } from '../Typography/Typography.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';

/** An outlined chip component that displays a label and optional leading and trailing icons. */
const Chip = ({ children, leading, trailing, className, }) => (jsxs("div", { className: classNames('chip', className), children: [Boolean(leading) && jsx("div", { className: 'chip--leading', children: leading }), jsx(Typography, { variant: 'body_small', children: children }), Boolean(trailing) && jsx("div", { className: 'chip--trailing', children: trailing })] }));

export { Chip };
