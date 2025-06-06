'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var ListTile = require('../ListTile/ListTile.cjs');

const IconListTile = (_a) => {
    var { children, className } = _a, props = _tslib.__rest(_a, ["children", "className"]);
    return (jsxRuntime.jsx(ListTile.ListTile, Object.assign({}, props, { className: classNames.classNames(className, 'icon-list-tile'), children: jsxRuntime.jsx("div", { className: 'icon-list-tile--children', children: children }) })));
};

exports.IconListTile = IconListTile;
