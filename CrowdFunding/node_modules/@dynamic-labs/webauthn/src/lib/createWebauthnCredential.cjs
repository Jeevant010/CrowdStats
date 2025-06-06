'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var browser = require('@simplewebauthn/browser');
var WebauthnNotSupportedError = require('./errors/WebauthnNotSupportedError.cjs');
var logger = require('./logger.cjs');

const createWebauthnCredential = (options) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!browser.browserSupportsWebAuthn()) {
        throw new WebauthnNotSupportedError.WebauthnNotSupportedError();
    }
    let attestationResp;
    try {
        attestationResp = yield browser.startRegistration({
            optionsJSON: options,
        });
    }
    catch (error) {
        logger.logger.debug('Failed to create webauthn credential', error);
        throw error;
    }
    return attestationResp;
});

exports.createWebauthnCredential = createWebauthnCredential;
