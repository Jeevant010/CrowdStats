'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Main = require('./Main.cjs');
var IsBrowser = require('./components/IsBrowser/IsBrowser.cjs');

const DynamicAuthFlow = () => (jsxRuntime.jsx(IsBrowser.IsBrowser, { children: jsxRuntime.jsx(Main.Main, {}) }));

exports.DynamicAuthFlow = DynamicAuthFlow;
