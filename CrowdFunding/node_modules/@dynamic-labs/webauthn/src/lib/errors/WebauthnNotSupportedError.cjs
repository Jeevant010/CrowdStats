'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class WebauthnNotSupportedError extends Error {
    constructor() {
        super('Webauthn is not supported on this device');
    }
}

exports.WebauthnNotSupportedError = WebauthnNotSupportedError;
