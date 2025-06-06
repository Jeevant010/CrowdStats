'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var UnprocessableEntityErrorCode = require('./UnprocessableEntityErrorCode.cjs');
var UnprocessableEntityErrorPayload = require('./UnprocessableEntityErrorPayload.cjs');

/* tslint:disable */
function UnprocessableEntityFromJSON(json) {
    return UnprocessableEntityFromJSONTyped(json);
}
function UnprocessableEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': json['error'],
        'code': !runtime.exists(json, 'code') ? undefined : UnprocessableEntityErrorCode.UnprocessableEntityErrorCodeFromJSON(json['code']),
        'payload': !runtime.exists(json, 'payload') ? undefined : UnprocessableEntityErrorPayload.UnprocessableEntityErrorPayloadFromJSON(json['payload']),
    };
}
function UnprocessableEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
        'code': UnprocessableEntityErrorCode.UnprocessableEntityErrorCodeToJSON(value.code),
        'payload': UnprocessableEntityErrorPayload.UnprocessableEntityErrorPayloadToJSON(value.payload),
    };
}

exports.UnprocessableEntityFromJSON = UnprocessableEntityFromJSON;
exports.UnprocessableEntityFromJSONTyped = UnprocessableEntityFromJSONTyped;
exports.UnprocessableEntityToJSON = UnprocessableEntityToJSON;
