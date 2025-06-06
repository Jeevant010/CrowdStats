'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function RegisterSessionKeyRequestFromJSON(json) {
    return RegisterSessionKeyRequestFromJSONTyped(json);
}
function RegisterSessionKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['publicKey'],
        'prevSessionKeySignature': !runtime.exists(json, 'prevSessionKeySignature') ? undefined : json['prevSessionKeySignature'],
        'walletId': !runtime.exists(json, 'walletId') ? undefined : json['walletId'],
    };
}
function RegisterSessionKeyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKey': value.publicKey,
        'prevSessionKeySignature': value.prevSessionKeySignature,
        'walletId': value.walletId,
    };
}

exports.RegisterSessionKeyRequestFromJSON = RegisterSessionKeyRequestFromJSON;
exports.RegisterSessionKeyRequestFromJSONTyped = RegisterSessionKeyRequestFromJSONTyped;
exports.RegisterSessionKeyRequestToJSON = RegisterSessionKeyRequestToJSON;
