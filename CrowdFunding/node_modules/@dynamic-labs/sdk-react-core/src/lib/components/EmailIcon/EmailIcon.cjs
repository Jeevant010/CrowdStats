'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('../Icon/Icon.cjs');
require('react');
var signInWithEmail = require('../../shared/assets/sign-in-with-email.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');

const EmailIcon = (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signInWithEmail.ReactComponent, Object.assign({}, props, { "data-testid": 'sign-in-with-email-icon' })) }));

exports.EmailIcon = EmailIcon;
