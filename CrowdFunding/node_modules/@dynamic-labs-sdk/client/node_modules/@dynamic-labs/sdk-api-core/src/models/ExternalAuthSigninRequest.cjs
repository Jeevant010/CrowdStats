'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ExternalAuthSigninRequestFromJSON(json) {
    return ExternalAuthSigninRequestFromJSONTyped(json);
}
function ExternalAuthSigninRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwt': !runtime.exists(json, 'jwt') ? undefined : json['jwt'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function ExternalAuthSigninRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwt': value.jwt,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

exports.ExternalAuthSigninRequestFromJSON = ExternalAuthSigninRequestFromJSON;
exports.ExternalAuthSigninRequestFromJSONTyped = ExternalAuthSigninRequestFromJSONTyped;
exports.ExternalAuthSigninRequestToJSON = ExternalAuthSigninRequestToJSON;
