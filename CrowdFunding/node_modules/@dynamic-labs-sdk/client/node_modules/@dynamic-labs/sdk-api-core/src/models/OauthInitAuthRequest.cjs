'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function OauthInitAuthRequestFromJSON(json) {
    return OauthInitAuthRequestFromJSONTyped(json);
}
function OauthInitAuthRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': json['state'],
        'redirectUrl': !runtime.exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
    };
}
function OauthInitAuthRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
        'redirectUrl': value.redirectUrl,
    };
}

exports.OauthInitAuthRequestFromJSON = OauthInitAuthRequestFromJSON;
exports.OauthInitAuthRequestFromJSONTyped = OauthInitAuthRequestFromJSONTyped;
exports.OauthInitAuthRequestToJSON = OauthInitAuthRequestToJSON;
