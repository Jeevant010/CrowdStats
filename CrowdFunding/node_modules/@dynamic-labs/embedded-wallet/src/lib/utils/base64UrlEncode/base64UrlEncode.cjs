'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const base64UrlEncode = (challenge) => Buffer.from(challenge)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

exports.base64UrlEncode = base64UrlEncode;
