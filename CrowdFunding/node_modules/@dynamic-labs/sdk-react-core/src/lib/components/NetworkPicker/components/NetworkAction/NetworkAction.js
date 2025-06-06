'use client'
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import { Network } from '../Network/Network.js';

const NetworkAction = ({ iconUrl, networkId, network, onClick, networkName, checkboxClassName = '', newNetworkId, notSupported, }) => (jsx("div", { className: classNames('network-action', {
        'network--not-supported': notSupported,
    }), onClick: () => {
        !notSupported && onClick(networkId);
    }, "data-testid": 'network-action', children: jsx(Network, { iconUrl: iconUrl, isActive: networkId === network, networkName: networkName, checkboxClassName: checkboxClassName, isChanging: newNetworkId === networkId, notSupported: notSupported }) }));

export { NetworkAction };
