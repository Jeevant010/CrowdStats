'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AuthenticatorAttestationResponseFromJSON(json) {
    return AuthenticatorAttestationResponseFromJSONTyped(json);
}
function AuthenticatorAttestationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientDataJSON': json['clientDataJSON'],
        'attestationObject': json['attestationObject'],
        'authenticatorData': !runtime.exists(json, 'authenticatorData') ? undefined : json['authenticatorData'],
        'publicKeyAlgorithm': !runtime.exists(json, 'publicKeyAlgorithm') ? undefined : json['publicKeyAlgorithm'],
        'publicKey': !runtime.exists(json, 'publicKey') ? undefined : json['publicKey'],
    };
}
function AuthenticatorAttestationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientDataJSON': value.clientDataJSON,
        'attestationObject': value.attestationObject,
        'authenticatorData': value.authenticatorData,
        'publicKeyAlgorithm': value.publicKeyAlgorithm,
        'publicKey': value.publicKey,
    };
}

exports.AuthenticatorAttestationResponseFromJSON = AuthenticatorAttestationResponseFromJSON;
exports.AuthenticatorAttestationResponseFromJSONTyped = AuthenticatorAttestationResponseFromJSONTyped;
exports.AuthenticatorAttestationResponseToJSON = AuthenticatorAttestationResponseToJSON;
