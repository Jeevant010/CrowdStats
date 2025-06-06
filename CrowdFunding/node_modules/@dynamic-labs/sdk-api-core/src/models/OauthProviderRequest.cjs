'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function OauthProviderRequestFromJSON(json) {
    return OauthProviderRequestFromJSONTyped(json);
}
function OauthProviderRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': !runtime.exists(json, 'provider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'accessToken': !runtime.exists(json, 'accessToken') ? undefined : json['accessToken'],
        'didToken': !runtime.exists(json, 'didToken') ? undefined : json['didToken'],
    };
}
function OauthProviderRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
        'accessToken': value.accessToken,
        'didToken': value.didToken,
    };
}

exports.OauthProviderRequestFromJSON = OauthProviderRequestFromJSON;
exports.OauthProviderRequestFromJSONTyped = OauthProviderRequestFromJSONTyped;
exports.OauthProviderRequestToJSON = OauthProviderRequestToJSON;
