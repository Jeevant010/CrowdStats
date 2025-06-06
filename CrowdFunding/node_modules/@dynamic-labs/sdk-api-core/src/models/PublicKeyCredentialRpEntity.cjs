'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function PublicKeyCredentialRpEntityFromJSON(json) {
    return PublicKeyCredentialRpEntityFromJSONTyped(json);
}
function PublicKeyCredentialRpEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
    };
}
function PublicKeyCredentialRpEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}

exports.PublicKeyCredentialRpEntityFromJSON = PublicKeyCredentialRpEntityFromJSON;
exports.PublicKeyCredentialRpEntityFromJSONTyped = PublicKeyCredentialRpEntityFromJSONTyped;
exports.PublicKeyCredentialRpEntityToJSON = PublicKeyCredentialRpEntityToJSON;
