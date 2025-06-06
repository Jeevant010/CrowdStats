'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DynamicEmbeddedAuthFlow = require('./DynamicEmbeddedAuthFlow/DynamicEmbeddedAuthFlow.cjs');
var DynamicEmbeddedUserProfile = require('./DynamicEmbeddedUserProfile/DynamicEmbeddedUserProfile.cjs');

const DynamicEmbeddedWidget = ({ background = 'none', className, style, }) => (
// Only one of these 2 show at any given time, due these components' own definitions
jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DynamicEmbeddedAuthFlow.DynamicEmbeddedAuthFlow, { background: background, className: className, style: style }), jsxRuntime.jsx(DynamicEmbeddedUserProfile.DynamicEmbeddedUserProfile, { background: background, className: className, style: style })] }));

exports.DynamicEmbeddedWidget = DynamicEmbeddedWidget;
