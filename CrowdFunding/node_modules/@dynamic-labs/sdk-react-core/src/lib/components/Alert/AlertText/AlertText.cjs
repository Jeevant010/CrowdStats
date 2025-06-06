'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../../Typography/Typography.cjs');

const AlertText = ({ content, contentDataTestId, }) => {
    if (typeof content === 'string')
        return (jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'current-color', "data-testid": contentDataTestId, children: content }));
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: content });
};

exports.AlertText = AlertText;
