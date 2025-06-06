'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');

const parseEther = (input) => viem.parseEther(input, 'wei');

exports.parseEther = parseEther;
