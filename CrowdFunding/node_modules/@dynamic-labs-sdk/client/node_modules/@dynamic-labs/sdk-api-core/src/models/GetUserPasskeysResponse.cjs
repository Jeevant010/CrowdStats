'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var UserPasskey = require('./UserPasskey.cjs');

/* tslint:disable */
function GetUserPasskeysResponseFromJSON(json) {
    return GetUserPasskeysResponseFromJSONTyped(json);
}
function GetUserPasskeysResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'passkeys': (json['passkeys'].map(UserPasskey.UserPasskeyFromJSON)),
        'count': json['count'],
    };
}
function GetUserPasskeysResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'passkeys': (value.passkeys.map(UserPasskey.UserPasskeyToJSON)),
        'count': value.count,
    };
}

exports.GetUserPasskeysResponseFromJSON = GetUserPasskeysResponseFromJSON;
exports.GetUserPasskeysResponseFromJSONTyped = GetUserPasskeysResponseFromJSONTyped;
exports.GetUserPasskeysResponseToJSON = GetUserPasskeysResponseToJSON;
