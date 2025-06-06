'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ExternalAuthFromJSON(json) {
    return ExternalAuthFromJSONTyped(json);
}
function ExternalAuthFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !runtime.exists(json, 'enabled') ? undefined : json['enabled'],
        'iss': !runtime.exists(json, 'iss') ? undefined : json['iss'],
        'aud': !runtime.exists(json, 'aud') ? undefined : json['aud'],
        'jwksUrl': !runtime.exists(json, 'jwksUrl') ? undefined : json['jwksUrl'],
        'cookieName': !runtime.exists(json, 'cookieName') ? undefined : json['cookieName'],
    };
}
function ExternalAuthToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'iss': value.iss,
        'aud': value.aud,
        'jwksUrl': value.jwksUrl,
        'cookieName': value.cookieName,
    };
}

exports.ExternalAuthFromJSON = ExternalAuthFromJSON;
exports.ExternalAuthFromJSONTyped = ExternalAuthFromJSONTyped;
exports.ExternalAuthToJSON = ExternalAuthToJSON;
