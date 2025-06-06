'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isMagicConnector = (connector) => ['magicemailotp', 'magicsocial'].includes(connector.key);

exports.isMagicConnector = isMagicConnector;
