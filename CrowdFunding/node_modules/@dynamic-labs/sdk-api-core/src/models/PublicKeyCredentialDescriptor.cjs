'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PublicKeyCredentialType = require('./PublicKeyCredentialType.cjs');

/* tslint:disable */
function PublicKeyCredentialDescriptorFromJSON(json) {
    return PublicKeyCredentialDescriptorFromJSONTyped(json);
}
function PublicKeyCredentialDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': PublicKeyCredentialType.PublicKeyCredentialTypeFromJSON(json['type']),
    };
}
function PublicKeyCredentialDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': PublicKeyCredentialType.PublicKeyCredentialTypeToJSON(value.type),
    };
}

exports.PublicKeyCredentialDescriptorFromJSON = PublicKeyCredentialDescriptorFromJSON;
exports.PublicKeyCredentialDescriptorFromJSONTyped = PublicKeyCredentialDescriptorFromJSONTyped;
exports.PublicKeyCredentialDescriptorToJSON = PublicKeyCredentialDescriptorToJSON;
