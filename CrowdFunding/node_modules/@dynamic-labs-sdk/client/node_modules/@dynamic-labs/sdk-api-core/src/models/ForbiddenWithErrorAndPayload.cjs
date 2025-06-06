'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ErrorMessageWithCode = require('./ErrorMessageWithCode.cjs');
var ForbiddenErrorPayload = require('./ForbiddenErrorPayload.cjs');

/* tslint:disable */
function ForbiddenWithErrorAndPayloadFromJSON(json) {
    return ForbiddenWithErrorAndPayloadFromJSONTyped(json);
}
function ForbiddenWithErrorAndPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : ErrorMessageWithCode.ErrorMessageWithCodeFromJSON(json['error']),
        'payload': !runtime.exists(json, 'payload') ? undefined : ForbiddenErrorPayload.ForbiddenErrorPayloadFromJSON(json['payload']),
    };
}
function ForbiddenWithErrorAndPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': ErrorMessageWithCode.ErrorMessageWithCodeToJSON(value.error),
        'payload': ForbiddenErrorPayload.ForbiddenErrorPayloadToJSON(value.payload),
    };
}

exports.ForbiddenWithErrorAndPayloadFromJSON = ForbiddenWithErrorAndPayloadFromJSON;
exports.ForbiddenWithErrorAndPayloadFromJSONTyped = ForbiddenWithErrorAndPayloadFromJSONTyped;
exports.ForbiddenWithErrorAndPayloadToJSON = ForbiddenWithErrorAndPayloadToJSON;
