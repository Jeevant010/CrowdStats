'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('../Icon/Icon.cjs');
require('react');
var mfaRecoveryIcon = require('../../shared/assets/mfa-recovery-icon.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');

const MfaRecoveryScreenIcon = (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(mfaRecoveryIcon.ReactComponent, Object.assign({}, props, { "data-testid": 'mfa-recovery-icon' })) }));

exports.MfaRecoveryScreenIcon = MfaRecoveryScreenIcon;
