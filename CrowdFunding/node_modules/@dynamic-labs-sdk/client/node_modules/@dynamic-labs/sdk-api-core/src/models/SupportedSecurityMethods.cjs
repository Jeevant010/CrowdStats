'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SupportedSecurityMethod = require('./SupportedSecurityMethod.cjs');

/* tslint:disable */
function SupportedSecurityMethodsFromJSON(json) {
    return SupportedSecurityMethodsFromJSONTyped(json);
}
function SupportedSecurityMethodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'passkey': !runtime.exists(json, 'passkey') ? undefined : SupportedSecurityMethod.SupportedSecurityMethodFromJSON(json['passkey']),
        'email': !runtime.exists(json, 'email') ? undefined : SupportedSecurityMethod.SupportedSecurityMethodFromJSON(json['email']),
        'password': !runtime.exists(json, 'password') ? undefined : SupportedSecurityMethod.SupportedSecurityMethodFromJSON(json['password']),
    };
}
function SupportedSecurityMethodsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'passkey': SupportedSecurityMethod.SupportedSecurityMethodToJSON(value.passkey),
        'email': SupportedSecurityMethod.SupportedSecurityMethodToJSON(value.email),
        'password': SupportedSecurityMethod.SupportedSecurityMethodToJSON(value.password),
    };
}

exports.SupportedSecurityMethodsFromJSON = SupportedSecurityMethodsFromJSON;
exports.SupportedSecurityMethodsFromJSONTyped = SupportedSecurityMethodsFromJSONTyped;
exports.SupportedSecurityMethodsToJSON = SupportedSecurityMethodsToJSON;
