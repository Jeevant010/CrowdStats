'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ForbiddenErrorPayloadFromJSON(json) {
    return ForbiddenErrorPayloadFromJSONTyped(json);
}
function ForbiddenErrorPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
    };
}
function ForbiddenErrorPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'email': value.email,
    };
}

exports.ForbiddenErrorPayloadFromJSON = ForbiddenErrorPayloadFromJSON;
exports.ForbiddenErrorPayloadFromJSONTyped = ForbiddenErrorPayloadFromJSONTyped;
exports.ForbiddenErrorPayloadToJSON = ForbiddenErrorPayloadToJSON;
