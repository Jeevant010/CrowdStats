'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isEmailValid = (email) => EMAIL_REGEX.test(email);

exports.isEmailValid = isEmailValid;
