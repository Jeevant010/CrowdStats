'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var yup = require('yup');

// User Fields Schema without captchaToken and policiesConsent properties
const userFieldsSchema = yup.object().shape({
    alias: yup.string(),
    btcWallet: yup.string(),
    ckbWallet: yup.string(),
    country: yup.string(),
    discordNotification: yup.boolean(),
    dogeWallet: yup.string(),
    email: yup.string(),
    emailNotification: yup.boolean(),
    firstName: yup.string(),
    jobTitle: yup.string(),
    kasWallet: yup.string(),
    kdaWallet: yup.string(),
    lastName: yup.string(),
    ltcWallet: yup.string(),
    metadata: yup.object(),
    newsletterNotification: yup.boolean(),
    phoneNumber: yup.string(),
    tShirtSize: yup.string(),
    team: yup.string(),
    username: yup.string(),
});

exports.userFieldsSchema = userFieldsSchema;
