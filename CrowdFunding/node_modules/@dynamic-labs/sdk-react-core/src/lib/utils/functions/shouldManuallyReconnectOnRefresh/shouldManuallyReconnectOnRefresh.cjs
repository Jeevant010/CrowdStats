'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shouldManuallyReconnectOnRefresh = (connector) => connector.connectedChain === 'STARK' || connector.connectedChain === 'FLOW';

exports.shouldManuallyReconnectOnRefresh = shouldManuallyReconnectOnRefresh;
