'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var SendBalanceView = require('../../../../views/SendBalanceView/SendBalanceView.cjs');

const SendBalanceWidgetView = () => {
    const { goToInitialDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    return (jsxRuntime.jsx("div", { className: 'send-balance-widget-view', children: jsxRuntime.jsx(SendBalanceView.SendBalanceView, { onClickBack: goToInitialDynamicWidgetView, onDone: goToInitialDynamicWidgetView }) }));
};

exports.SendBalanceWidgetView = SendBalanceWidgetView;
