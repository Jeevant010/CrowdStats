'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AuthenticatorTransportProtocol = require('./AuthenticatorTransportProtocol.cjs');

/* tslint:disable */
function PasskeyRegistrationCredentialFromJSON(json) {
    return PasskeyRegistrationCredentialFromJSONTyped(json);
}
function PasskeyRegistrationCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestationObject': json['attestationObject'],
        'clientDataJson': json['clientDataJson'],
        'credentialId': json['credentialId'],
        'transports': (json['transports'].map(AuthenticatorTransportProtocol.AuthenticatorTransportProtocolFromJSON)),
    };
}
function PasskeyRegistrationCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestationObject': value.attestationObject,
        'clientDataJson': value.clientDataJson,
        'credentialId': value.credentialId,
        'transports': (value.transports.map(AuthenticatorTransportProtocol.AuthenticatorTransportProtocolToJSON)),
    };
}

exports.PasskeyRegistrationCredentialFromJSON = PasskeyRegistrationCredentialFromJSON;
exports.PasskeyRegistrationCredentialFromJSONTyped = PasskeyRegistrationCredentialFromJSONTyped;
exports.PasskeyRegistrationCredentialToJSON = PasskeyRegistrationCredentialToJSON;
