'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function JwtVerifiedCredentialHashesFromJSON(json) {
    return JwtVerifiedCredentialHashesFromJSONTyped(json);
}
function JwtVerifiedCredentialHashesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockchain': !runtime.exists(json, 'blockchain') ? undefined : json['blockchain'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'oauth': !runtime.exists(json, 'oauth') ? undefined : json['oauth'],
        'phoneNumber': !runtime.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'externalUser': !runtime.exists(json, 'externalUser') ? undefined : json['externalUser'],
    };
}
function JwtVerifiedCredentialHashesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockchain': value.blockchain,
        'email': value.email,
        'oauth': value.oauth,
        'phoneNumber': value.phoneNumber,
        'externalUser': value.externalUser,
    };
}

exports.JwtVerifiedCredentialHashesFromJSON = JwtVerifiedCredentialHashesFromJSON;
exports.JwtVerifiedCredentialHashesFromJSONTyped = JwtVerifiedCredentialHashesFromJSONTyped;
exports.JwtVerifiedCredentialHashesToJSON = JwtVerifiedCredentialHashesToJSON;
