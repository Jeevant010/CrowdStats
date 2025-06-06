'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isInIframe = () => window.self !== window.top;

exports.isInIframe = isInIframe;
