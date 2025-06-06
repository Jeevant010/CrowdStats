'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('../../../../../components/Icon/Icon.cjs');
require('react');
var chevronRight = require('../../../../../shared/assets/chevron-right.cjs');
require('@dynamic-labs/iconic');
require('../../../../../context/ViewContext/ViewContext.cjs');

const MakeTrailing = ({ showChevron, previewIcons, }) => {
    if (!showChevron && !previewIcons.length) {
        return null;
    }
    return (jsxRuntime.jsxs("div", { className: 'choose-wallet-funding-method__options__option__trailing', children: [previewIcons.length > 0 && (jsxRuntime.jsx("div", { "data-testid": 'preview-icons', className: 'choose-wallet-funding-method__options__option__trailing__preview-icons', children: previewIcons.map((icon) => icon) })), showChevron && (jsxRuntime.jsx(Icon.Icon, { size: 'small', color: 'text-tertiary', children: jsxRuntime.jsx(chevronRight.ReactComponent, { "data-testid": 'chevron-icon' }) }))] }));
};

exports.MakeTrailing = MakeTrailing;
