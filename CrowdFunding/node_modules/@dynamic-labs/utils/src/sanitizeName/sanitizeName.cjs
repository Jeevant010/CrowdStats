'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const sanitizeName = (name) => name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

exports.sanitizeName = sanitizeName;
