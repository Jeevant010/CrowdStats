'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Returns undefined if an object values are all nullish
 * @param val object
 * @returns
 */
const filterEmptyObject = (val) => val && Object.values(val).some((x) => Boolean(x)) ? val : undefined;

exports.filterEmptyObject = filterEmptyObject;
