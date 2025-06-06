'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function OAuthAccountFromJSON(json) {
    return OAuthAccountFromJSONTyped(json);
}
function OAuthAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'provider': !runtime.exists(json, 'provider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['provider']),
    };
}
function OAuthAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
    };
}

exports.OAuthAccountFromJSON = OAuthAccountFromJSON;
exports.OAuthAccountFromJSONTyped = OAuthAccountFromJSONTyped;
exports.OAuthAccountToJSON = OAuthAccountToJSON;
