'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isAccountAbstractionConnector = (walletConnector) => walletConnector !== undefined &&
    walletConnector !== null &&
    typeof walletConnector === 'object' &&
    'canSponsorTransactionGas' in walletConnector;

exports.isAccountAbstractionConnector = isAccountAbstractionConnector;
