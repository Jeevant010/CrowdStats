'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
var Network = require('../Network/Network.cjs');

const NetworkAction = ({ iconUrl, networkId, network, onClick, networkName, checkboxClassName = '', newNetworkId, notSupported, }) => (jsxRuntime.jsx("div", { className: classNames.classNames('network-action', {
        'network--not-supported': notSupported,
    }), onClick: () => {
        !notSupported && onClick(networkId);
    }, "data-testid": 'network-action', children: jsxRuntime.jsx(Network.Network, { iconUrl: iconUrl, isActive: networkId === network, networkName: networkName, checkboxClassName: checkboxClassName, isChanging: newNetworkId === networkId, notSupported: notSupported }) }));

exports.NetworkAction = NetworkAction;
