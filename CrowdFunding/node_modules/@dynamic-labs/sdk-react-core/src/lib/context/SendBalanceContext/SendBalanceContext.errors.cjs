'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const noWalletError = new utils.DynamicError('No wallet connected');
const invalidWalletTypeError = new utils.DynamicError('Primary wallet must use embedded wallet');

exports.invalidWalletTypeError = invalidWalletTypeError;
exports.noWalletError = noWalletError;
