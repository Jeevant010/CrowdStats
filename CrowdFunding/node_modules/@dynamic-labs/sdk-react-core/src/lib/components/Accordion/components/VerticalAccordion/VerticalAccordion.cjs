'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');

const VerticalAccordion = ({ children, className, style, view, }) => (jsxRuntime.jsx("div", { className: classNames.classNames(className, 'vertical-accordion__container'), style: style, "data-dynamic-view": view, children: children }));

exports.VerticalAccordion = VerticalAccordion;
