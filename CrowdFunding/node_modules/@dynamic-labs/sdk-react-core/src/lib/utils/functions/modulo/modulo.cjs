'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** Performs the true mathematical operation of "number mod target" */
const modulo = (number, target) => ((number % target) + target) % target;

exports.modulo = modulo;
