'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');

const mapTransformOriginToClassName = {
    'bottom-left': 'popper-content__transform-origin-bottom-left',
    'bottom-right': 'popper-content__transform-origin-bottom-right',
    'top-left': 'popper-content__transform-origin-top-left',
    'top-right': 'popper-content__transform-origin-top-right',
};
const PopperContent = React.forwardRef(({ children, transformOrigin, style, className }, ref) => (jsxRuntime.jsx("div", { "data-testid": 'popper-content', ref: ref, className: classNames.classNames('popper-content', mapTransformOriginToClassName[transformOrigin], className), style: style, children: children })));
PopperContent.displayName = 'PopperContent';

exports.PopperContent = PopperContent;
