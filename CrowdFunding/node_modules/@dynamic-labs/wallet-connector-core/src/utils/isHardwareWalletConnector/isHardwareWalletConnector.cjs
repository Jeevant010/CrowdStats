'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isHardwareWalletConnector = (connector) => 'canConnectWithHardwareWallet' in connector;

exports.isHardwareWalletConnector = isHardwareWalletConnector;
