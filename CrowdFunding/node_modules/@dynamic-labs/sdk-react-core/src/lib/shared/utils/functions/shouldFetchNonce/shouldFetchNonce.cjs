'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const shouldFetchNonce = ({ authMode }) => authMode === 'connect-and-sign' || utils.isMobile();

exports.shouldFetchNonce = shouldFetchNonce;
