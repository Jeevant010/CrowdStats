'use client'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Typography } from '../../../Typography/Typography.js';
import { Icon } from '../../../Icon/Icon.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';

const InlineWidgetButton = ({ onClick, children, icon, className }) => (jsxs("button", { className: classNames('inline-widget-button', className), onClick: onClick, children: [icon && (jsxs(Fragment, { children: [jsx(Icon, { className: 'inline-widget-button__icon', children: icon }), jsx("div", { className: 'inline-widget-button__vertical-divider' })] })), jsx(Typography, { variant: 'body_small', color: 'primary', weight: 'medium', children: children })] }));

export { InlineWidgetButton };
