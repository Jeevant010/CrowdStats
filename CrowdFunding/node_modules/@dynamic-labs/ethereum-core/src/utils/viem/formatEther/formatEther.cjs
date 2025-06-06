'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');
var utils = require('@dynamic-labs/utils');

const formatEther = (value, { precision } = {}) => utils.formatNumberText(viem.formatEther(value), { precision });

exports.formatEther = formatEther;
