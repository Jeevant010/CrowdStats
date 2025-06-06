'use client'
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const StatusDot = ({ variant, containerClassName }) => (jsx("div", { "data-testid": 'status-dot-container', className: classNames('status-dot__container', containerClassName || ''), children: jsx("div", { "data-testid": 'status-dot', className: classNames('status-dot', `status-dot--${variant}`) }) }));

export { StatusDot };
