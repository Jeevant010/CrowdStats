'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Divider = require('../Divider/Divider.cjs');

const Stepper = ({ children }) => (jsxRuntime.jsx("div", { className: 'stepper', children: React.Children.map(children, (step, index) => {
        const divider = index === 0 ? undefined : jsxRuntime.jsx(Divider.Divider, { className: 'stepper__divider' });
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [divider, step] }));
    }) }));

exports.Stepper = Stepper;
