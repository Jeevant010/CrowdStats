'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isBloctoConnector = (connector) => ['bloctoemail', 'bloctoevm', 'Blocto'].includes(connector.key);

exports.isBloctoConnector = isBloctoConnector;
