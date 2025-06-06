'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalizeAddress = require('./utils/normalizeAddress/normalizeAddress.cjs');

const isSameAddress = (left, right, chain) => normalizeAddress.normalizeAddress(left, chain) === normalizeAddress.normalizeAddress(right, chain);

exports.isSameAddress = isSameAddress;
