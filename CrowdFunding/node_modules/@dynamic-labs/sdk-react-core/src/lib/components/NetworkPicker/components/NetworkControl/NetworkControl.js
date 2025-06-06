'use client'
import { jsx } from 'react/jsx-runtime';
import { ChainEnum } from '@dynamic-labs/sdk-api-core';
import { NetworkSwitchControl } from '../NetworkSwitchControl/NetworkSwitchControl.js';
import { NetworkControlSkeleton } from '../NetworkControlSkeleton/NetworkControlSkeleton.js';
import { NonNetworkSwitchingSupportedControl } from '../NonNetworkSwitchingSupportedControl/NonNetworkSwitchingSupportedControl.js';

const NetworkControl = ({ loading, walletConnector, buttonClassName, network, activeClassName, isOpen, setIsOpen, showNetworkName, }) => {
    const enabledNetworks = walletConnector.getEnabledNetworks();
    // Checks when switching to EVM if the network is still loading.
    // if network is a string the user is switching chains
    // this prevents the network control from flickering
    const chainSwitchLoading = walletConnector.connectedChain === ChainEnum.Evm &&
        typeof network === 'string';
    if (loading || chainSwitchLoading) {
        return jsx(NetworkControlSkeleton, { className: buttonClassName });
    }
    if (!walletConnector.supportsNetworkSwitching()) {
        return (jsx(NonNetworkSwitchingSupportedControl, { className: buttonClassName, showNetworkName: showNetworkName, walletConnector: walletConnector, network: network, enabledNetworks: enabledNetworks }));
    }
    return (jsx(NetworkSwitchControl, { showNetworkName: showNetworkName, enabledNetworks: enabledNetworks, activeClassName: activeClassName, className: buttonClassName, network: network, loading: loading, isOpen: isOpen, walletConnector: walletConnector, setIsOpen: setIsOpen }));
};

export { NetworkControl };
