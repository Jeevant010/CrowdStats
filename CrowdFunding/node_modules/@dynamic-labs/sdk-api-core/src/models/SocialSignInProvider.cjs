'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SocialSignInProviderEnum = require('./SocialSignInProviderEnum.cjs');

/* tslint:disable */
function SocialSignInProviderFromJSON(json) {
    return SocialSignInProviderFromJSONTyped(json);
}
function SocialSignInProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': SocialSignInProviderEnum.SocialSignInProviderEnumFromJSON(json['provider']),
        'enabled': !runtime.exists(json, 'enabled') ? undefined : json['enabled'],
    };
}
function SocialSignInProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': SocialSignInProviderEnum.SocialSignInProviderEnumToJSON(value.provider),
        'enabled': value.enabled,
    };
}

exports.SocialSignInProviderFromJSON = SocialSignInProviderFromJSON;
exports.SocialSignInProviderFromJSONTyped = SocialSignInProviderFromJSONTyped;
exports.SocialSignInProviderToJSON = SocialSignInProviderToJSON;
