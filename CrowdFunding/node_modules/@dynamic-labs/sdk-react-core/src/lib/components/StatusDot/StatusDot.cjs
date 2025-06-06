'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const StatusDot = ({ variant, containerClassName }) => (jsxRuntime.jsx("div", { "data-testid": 'status-dot-container', className: classNames.classNames('status-dot__container', containerClassName || ''), children: jsxRuntime.jsx("div", { "data-testid": 'status-dot', className: classNames.classNames('status-dot', `status-dot--${variant}`) }) }));

exports.StatusDot = StatusDot;
