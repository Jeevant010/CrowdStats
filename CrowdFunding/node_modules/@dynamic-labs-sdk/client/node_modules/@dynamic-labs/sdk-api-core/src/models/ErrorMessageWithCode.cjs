'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ErrorMessageWithCodeFromJSON(json) {
    return ErrorMessageWithCodeFromJSONTyped(json);
}
function ErrorMessageWithCodeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !runtime.exists(json, 'code') ? undefined : json['code'],
        'message': !runtime.exists(json, 'message') ? undefined : json['message'],
    };
}
function ErrorMessageWithCodeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'message': value.message,
    };
}

exports.ErrorMessageWithCodeFromJSON = ErrorMessageWithCodeFromJSON;
exports.ErrorMessageWithCodeFromJSONTyped = ErrorMessageWithCodeFromJSONTyped;
exports.ErrorMessageWithCodeToJSON = ErrorMessageWithCodeToJSON;
