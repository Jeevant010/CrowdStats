'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const IconButton = React.forwardRef((_a, ref) => {
    var { className = '', color } = _a, props = _tslib.__rest(_a, ["className", "color"]);
    return (jsxRuntime.jsx("button", Object.assign({}, props, { className: classNames.classNames('icon-button', className), ref: ref })));
});
IconButton.displayName = 'IconButton';

exports.IconButton = IconButton;
