'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Skeleton = require('../Skeleton/Skeleton.cjs');

const MfaDeviceTileSkeleton = () => (jsxRuntime.jsx("div", { className: 'mfa-device-skeleton', "data-testid": 'mfa-device-loading', children: jsxRuntime.jsxs("div", { className: 'mfa-device-skeleton__details', children: [jsxRuntime.jsx(Skeleton.Skeleton, {}), jsxRuntime.jsx(Skeleton.Skeleton, {})] }) }));

exports.MfaDeviceTileSkeleton = MfaDeviceTileSkeleton;
