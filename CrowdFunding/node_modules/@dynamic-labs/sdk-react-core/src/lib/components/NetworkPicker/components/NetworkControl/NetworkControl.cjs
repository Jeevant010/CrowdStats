'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var NetworkSwitchControl = require('../NetworkSwitchControl/NetworkSwitchControl.cjs');
var NetworkControlSkeleton = require('../NetworkControlSkeleton/NetworkControlSkeleton.cjs');
var NonNetworkSwitchingSupportedControl = require('../NonNetworkSwitchingSupportedControl/NonNetworkSwitchingSupportedControl.cjs');

const NetworkControl = ({ loading, walletConnector, buttonClassName, network, activeClassName, isOpen, setIsOpen, showNetworkName, }) => {
    const enabledNetworks = walletConnector.getEnabledNetworks();
    // Checks when switching to EVM if the network is still loading.
    // if network is a string the user is switching chains
    // this prevents the network control from flickering
    const chainSwitchLoading = walletConnector.connectedChain === sdkApiCore.ChainEnum.Evm &&
        typeof network === 'string';
    if (loading || chainSwitchLoading) {
        return jsxRuntime.jsx(NetworkControlSkeleton.NetworkControlSkeleton, { className: buttonClassName });
    }
    if (!walletConnector.supportsNetworkSwitching()) {
        return (jsxRuntime.jsx(NonNetworkSwitchingSupportedControl.NonNetworkSwitchingSupportedControl, { className: buttonClassName, showNetworkName: showNetworkName, walletConnector: walletConnector, network: network, enabledNetworks: enabledNetworks }));
    }
    return (jsxRuntime.jsx(NetworkSwitchControl.NetworkSwitchControl, { showNetworkName: showNetworkName, enabledNetworks: enabledNetworks, activeClassName: activeClassName, className: buttonClassName, network: network, loading: loading, isOpen: isOpen, walletConnector: walletConnector, setIsOpen: setIsOpen }));
};

exports.NetworkControl = NetworkControl;
