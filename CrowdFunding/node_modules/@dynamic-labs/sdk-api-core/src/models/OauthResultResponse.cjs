'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var OauthResultStatus = require('./OauthResultStatus.cjs');

/* tslint:disable */
function OauthResultResponseFromJSON(json) {
    return OauthResultResponseFromJSONTyped(json);
}
function OauthResultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !runtime.exists(json, 'code') ? undefined : json['code'],
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
        'status': OauthResultStatus.OauthResultStatusFromJSON(json['status']),
    };
}
function OauthResultResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'error': value.error,
        'status': OauthResultStatus.OauthResultStatusToJSON(value.status),
    };
}

exports.OauthResultResponseFromJSON = OauthResultResponseFromJSON;
exports.OauthResultResponseFromJSONTyped = OauthResultResponseFromJSONTyped;
exports.OauthResultResponseToJSON = OauthResultResponseToJSON;
