'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const validateAddressFormat = (address) => /^0x[0-9a-fA-F]{40}$/.test(address);

exports.validateAddressFormat = validateAddressFormat;
