'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AuthenticationExtensionsClientOutputsFromJSON(json) {
    return AuthenticationExtensionsClientOutputsFromJSONTyped(json);
}
function AuthenticationExtensionsClientOutputsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appid': !runtime.exists(json, 'appid') ? undefined : json['appid'],
        'credProps': !runtime.exists(json, 'credProps') ? undefined : json['credProps'],
        'hmacCreateSecret': !runtime.exists(json, 'hmacCreateSecret') ? undefined : json['hmacCreateSecret'],
    };
}
function AuthenticationExtensionsClientOutputsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appid': value.appid,
        'credProps': value.credProps,
        'hmacCreateSecret': value.hmacCreateSecret,
    };
}

exports.AuthenticationExtensionsClientOutputsFromJSON = AuthenticationExtensionsClientOutputsFromJSON;
exports.AuthenticationExtensionsClientOutputsFromJSONTyped = AuthenticationExtensionsClientOutputsFromJSONTyped;
exports.AuthenticationExtensionsClientOutputsToJSON = AuthenticationExtensionsClientOutputsToJSON;
