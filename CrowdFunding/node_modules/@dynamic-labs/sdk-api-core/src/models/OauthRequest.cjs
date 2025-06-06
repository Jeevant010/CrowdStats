'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function OauthRequestFromJSON(json) {
    return OauthRequestFromJSONTyped(json);
}
function OauthRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !runtime.exists(json, 'code') ? undefined : json['code'],
        'codeVerifier': !runtime.exists(json, 'codeVerifier') ? undefined : json['codeVerifier'],
        'state': json['state'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function OauthRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'codeVerifier': value.codeVerifier,
        'state': value.state,
        'captchaToken': value.captchaToken,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

exports.OauthRequestFromJSON = OauthRequestFromJSON;
exports.OauthRequestFromJSONTyped = OauthRequestFromJSONTyped;
exports.OauthRequestToJSON = OauthRequestToJSON;
