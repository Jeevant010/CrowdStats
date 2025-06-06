'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AuthStorageEnum = require('./AuthStorageEnum.cjs');

/* tslint:disable */
function AuthSettingsFromJSON(json) {
    return AuthSettingsFromJSONTyped(json);
}
function AuthSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'storage': (json['storage'].map(AuthStorageEnum.AuthStorageEnumFromJSON)),
    };
}
function AuthSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'storage': (value.storage.map(AuthStorageEnum.AuthStorageEnumToJSON)),
    };
}

exports.AuthSettingsFromJSON = AuthSettingsFromJSON;
exports.AuthSettingsFromJSONTyped = AuthSettingsFromJSONTyped;
exports.AuthSettingsToJSON = AuthSettingsToJSON;
