'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var WebauthnNotSupportedError = require('./lib/errors/WebauthnNotSupportedError.cjs');
var createWebauthnCredential = require('./lib/createWebauthnCredential.cjs');
var authenticateWebauthnCredential = require('./lib/authenticateWebauthnCredential.cjs');
var convertTransportEnumToTurnkeyEnum = require('./lib/adapters/convertTransportEnumToTurnkeyEnum.cjs');
var getWebAuthnAttestationTurnkeyAdapter = require('./lib/adapters/getWebAuthnAttestationTurnkeyAdapter.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/webauthn', _package.version);

exports.WebauthnNotSupportedError = WebauthnNotSupportedError.WebauthnNotSupportedError;
exports.createWebauthnCredential = createWebauthnCredential.createWebauthnCredential;
exports.authenticateWebauthnCredential = authenticateWebauthnCredential.authenticateWebauthnCredential;
exports.convertTransportEnumToTurnkeyEnum = convertTransportEnumToTurnkeyEnum.convertTransportEnumToTurnkeyEnum;
exports.convertAttestationResultToTurnkey = getWebAuthnAttestationTurnkeyAdapter.convertAttestationResultToTurnkey;
exports.convertPublicKeyToWebauthn = getWebAuthnAttestationTurnkeyAdapter.convertPublicKeyToWebauthn;
exports.getWebAuthnAttestationTurnkeyAdapter = getWebAuthnAttestationTurnkeyAdapter.getWebAuthnAttestationTurnkeyAdapter;
