'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var webauthnStamper = require('@turnkey/webauthn-stamper');
var webauthn = require('@dynamic-labs/webauthn');

const createTurnkeyPasskeyService = () => ({
    createWebauthnStamper: (config) => new webauthnStamper.WebauthnStamper(config),
    getWebAuthnAttestation: webauthn.getWebAuthnAttestationTurnkeyAdapter,
});

exports.createTurnkeyPasskeyService = createTurnkeyPasskeyService;
