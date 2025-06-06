'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AuthenticationExtensionsClientInputsFromJSON(json) {
    return AuthenticationExtensionsClientInputsFromJSONTyped(json);
}
function AuthenticationExtensionsClientInputsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appid': !runtime.exists(json, 'appid') ? undefined : json['appid'],
        'credProps': !runtime.exists(json, 'credProps') ? undefined : json['credProps'],
        'hmacCreateSecret': !runtime.exists(json, 'hmacCreateSecret') ? undefined : json['hmacCreateSecret'],
    };
}
function AuthenticationExtensionsClientInputsToJSON(value) {
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

exports.AuthenticationExtensionsClientInputsFromJSON = AuthenticationExtensionsClientInputsFromJSON;
exports.AuthenticationExtensionsClientInputsFromJSONTyped = AuthenticationExtensionsClientInputsFromJSONTyped;
exports.AuthenticationExtensionsClientInputsToJSON = AuthenticationExtensionsClientInputsToJSON;
