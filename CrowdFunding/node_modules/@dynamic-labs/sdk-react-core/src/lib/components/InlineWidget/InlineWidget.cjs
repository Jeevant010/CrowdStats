'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const InlineWidget = React.forwardRef(({ children, className, dataTestId }, ref) => (jsxRuntime.jsx("div", { ref: ref, "data-testid": dataTestId, className: classNames.classNames('inline-widget', className), children: children })));
InlineWidget.displayName = 'InlineWidget';

exports.InlineWidget = InlineWidget;
