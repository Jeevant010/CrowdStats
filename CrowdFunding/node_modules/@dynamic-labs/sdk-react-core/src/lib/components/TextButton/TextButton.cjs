'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const TextButton = (_a) => {
    var { className = '' } = _a, props = _tslib.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("button", Object.assign({ className: classNames.classNames('text-button', className) }, props)));
};

exports.TextButton = TextButton;
