'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var browser = require('@simplewebauthn/browser');
var WebauthnNotSupportedError = require('./errors/WebauthnNotSupportedError.cjs');
var logger = require('./logger.cjs');

const authenticateWebauthnCredential = (options) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!browser.browserSupportsWebAuthn()) {
        throw new WebauthnNotSupportedError.WebauthnNotSupportedError();
    }
    let assertionResp;
    try {
        assertionResp = yield browser.startAuthentication({
            optionsJSON: options,
        });
    }
    catch (error) {
        logger.logger.debug('Failed to authenticate webauthn credential', error);
        throw error;
    }
    return assertionResp;
});

exports.authenticateWebauthnCredential = authenticateWebauthnCredential;
