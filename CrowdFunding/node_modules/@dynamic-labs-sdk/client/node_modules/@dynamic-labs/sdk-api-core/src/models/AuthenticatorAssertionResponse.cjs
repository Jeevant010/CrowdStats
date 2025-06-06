'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AuthenticatorAssertionResponseFromJSON(json) {
    return AuthenticatorAssertionResponseFromJSONTyped(json);
}
function AuthenticatorAssertionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientDataJSON': json['clientDataJSON'],
        'authenticatorData': json['authenticatorData'],
        'signature': json['signature'],
        'userHandle': !runtime.exists(json, 'userHandle') ? undefined : json['userHandle'],
    };
}
function AuthenticatorAssertionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientDataJSON': value.clientDataJSON,
        'authenticatorData': value.authenticatorData,
        'signature': value.signature,
        'userHandle': value.userHandle,
    };
}

exports.AuthenticatorAssertionResponseFromJSON = AuthenticatorAssertionResponseFromJSON;
exports.AuthenticatorAssertionResponseFromJSONTyped = AuthenticatorAssertionResponseFromJSONTyped;
exports.AuthenticatorAssertionResponseToJSON = AuthenticatorAssertionResponseToJSON;
