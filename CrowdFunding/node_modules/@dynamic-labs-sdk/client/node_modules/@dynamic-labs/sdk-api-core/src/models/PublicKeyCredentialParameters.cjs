'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PublicKeyCredentialType = require('./PublicKeyCredentialType.cjs');

/* tslint:disable */
function PublicKeyCredentialParametersFromJSON(json) {
    return PublicKeyCredentialParametersFromJSONTyped(json);
}
function PublicKeyCredentialParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alg': json['alg'],
        'type': PublicKeyCredentialType.PublicKeyCredentialTypeFromJSON(json['type']),
    };
}
function PublicKeyCredentialParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alg': value.alg,
        'type': PublicKeyCredentialType.PublicKeyCredentialTypeToJSON(value.type),
    };
}

exports.PublicKeyCredentialParametersFromJSON = PublicKeyCredentialParametersFromJSON;
exports.PublicKeyCredentialParametersFromJSONTyped = PublicKeyCredentialParametersFromJSONTyped;
exports.PublicKeyCredentialParametersToJSON = PublicKeyCredentialParametersToJSON;
