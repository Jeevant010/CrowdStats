'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('../Popper/Popper/Popper.cjs');
var PopperContext = require('../Popper/PopperContext/PopperContext.cjs');
var ShadowDOM = require('../ShadowDOM/ShadowDOM.cjs');

const DynamicBaseWidget = ({ children, shadowDOMProps }) => (jsxRuntime.jsx(ShadowDOM.ShadowDOM, Object.assign({}, shadowDOMProps, { children: jsxRuntime.jsx(PopperContext.PopperProvider, { children: children }) })));

exports.DynamicBaseWidget = DynamicBaseWidget;
