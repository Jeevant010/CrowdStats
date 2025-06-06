'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');

const DefaultFooter = ({ hideBorder }) => (jsxRuntime.jsx("div", { className: classNames.classNames('default-footer__footer', {
        'default-footer__footer--hidden': hideBorder,
    }), "data-testid": 'default-footer' }));

exports.DefaultFooter = DefaultFooter;
