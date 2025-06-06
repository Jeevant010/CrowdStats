'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var mapViewToComponent = require('./mapViewToComponent.cjs');

const DynamicWidgetViews = () => {
    const { dynamicWidgetView, viewProps } = DynamicWidgetContext.useWidgetContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ViewComponent = mapViewToComponent.mapViewToComponent[dynamicWidgetView] || mapViewToComponent.mapViewToComponent.wallets;
    return jsxRuntime.jsx(ViewComponent, Object.assign({}, viewProps));
};

exports.DynamicWidgetViews = DynamicWidgetViews;
