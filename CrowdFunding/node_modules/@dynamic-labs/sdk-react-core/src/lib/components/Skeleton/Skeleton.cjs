'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Skeleton = ({ count = 1, className, style, container, dataTestId, }) => (jsxRuntime.jsx("span", { "data-testid": dataTestId !== null && dataTestId !== void 0 ? dataTestId : 'loading-skeleton-container', className: container === null || container === void 0 ? void 0 : container.className, style: container === null || container === void 0 ? void 0 : container.style, children: new Array(count).fill(null).map((_, id) => (jsxRuntime.jsx("span", { className: `skeleton ${className} `, style: style, "data-testid": 'loading-skeleton', children: "\u200C" }, `skeleton-${id}`))) }));

exports.Skeleton = Skeleton;
