'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var PoweredByDynamic = require('../PoweredByDynamic/PoweredByDynamic.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var useAuthLayoutChecks = require('../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');

const DynamicFooter = () => {
    const { shouldHideDynamicFooterSeparator } = useAuthLayoutChecks.useAuthLayoutChecks();
    return (jsxRuntime.jsx("div", { "data-testid": 'dynamic-footer', className: classNames.classNames('dynamic-footer', {
            'dynamic-footer__top-border': !shouldHideDynamicFooterSeparator,
        }), children: jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, {}) }));
};

exports.DynamicFooter = DynamicFooter;
