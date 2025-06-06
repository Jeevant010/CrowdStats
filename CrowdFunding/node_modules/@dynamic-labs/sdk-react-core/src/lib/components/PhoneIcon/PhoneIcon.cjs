'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('../Icon/Icon.cjs');
require('react');
var signInWithPhone = require('../../shared/assets/sign-in-with-phone.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');

const PhoneIcon = (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signInWithPhone.ReactComponent, Object.assign({}, props, { "data-testid": 'sign-in-with-sms-icon' })) }));

exports.PhoneIcon = PhoneIcon;
