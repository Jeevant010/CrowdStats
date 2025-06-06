'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
// This is a helper to convert pixel to rem string.
// Since we are using rem as our unit of measurement, we need to convert pixel to rem
// otherwise, the styling can look broken if the user changes html font size in the browser.
//
const pixelToRem = (pixel) => `${pixel / 16}rem`;

exports.pixelToRem = pixelToRem;
