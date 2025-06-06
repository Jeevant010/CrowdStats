'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactInternationalPhone = require('react-international-phone');

/** Whether phone number is not empty */
const validatePhoneLength = (phone, country) => reactInternationalPhone.removeDialCode({ dialCode: country.dialCode, phone }).length > 0;

exports.validatePhoneLength = validatePhoneLength;
