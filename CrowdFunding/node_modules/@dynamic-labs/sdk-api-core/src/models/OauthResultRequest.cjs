'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function OauthResultRequestFromJSON(json) {
    return OauthResultRequestFromJSONTyped(json);
}
function OauthResultRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': !runtime.exists(json, 'state') ? undefined : json['state'],
        'telegramAuthToken': !runtime.exists(json, 'telegramAuthToken') ? undefined : json['telegramAuthToken'],
        'forceCreateUser': !runtime.exists(json, 'forceCreateUser') ? undefined : json['forceCreateUser'],
        'code': !runtime.exists(json, 'code') ? undefined : json['code'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function OauthResultRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
        'telegramAuthToken': value.telegramAuthToken,
        'forceCreateUser': value.forceCreateUser,
        'code': value.code,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

exports.OauthResultRequestFromJSON = OauthResultRequestFromJSON;
exports.OauthResultRequestFromJSONTyped = OauthResultRequestFromJSONTyped;
exports.OauthResultRequestToJSON = OauthResultRequestToJSON;
