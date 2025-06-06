'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isNonZero = (value) => Boolean(value && parseFloat(value.toString()) > 0);

exports.isNonZero = isNonZero;
