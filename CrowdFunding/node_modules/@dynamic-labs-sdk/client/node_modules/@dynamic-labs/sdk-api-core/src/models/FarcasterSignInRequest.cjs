'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function FarcasterSignInRequestFromJSON(json) {
    return FarcasterSignInRequestFromJSONTyped(json);
}
function FarcasterSignInRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'domain': json['domain'],
        'nonce': json['nonce'],
        'message': json['message'],
        'signature': json['signature'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function FarcasterSignInRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'domain': value.domain,
        'nonce': value.nonce,
        'message': value.message,
        'signature': value.signature,
        'captchaToken': value.captchaToken,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

exports.FarcasterSignInRequestFromJSON = FarcasterSignInRequestFromJSON;
exports.FarcasterSignInRequestFromJSONTyped = FarcasterSignInRequestFromJSONTyped;
exports.FarcasterSignInRequestToJSON = FarcasterSignInRequestToJSON;
