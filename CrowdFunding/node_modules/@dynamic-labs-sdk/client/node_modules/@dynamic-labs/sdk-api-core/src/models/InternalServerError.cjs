'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function InternalServerErrorFromJSON(json) {
    return InternalServerErrorFromJSONTyped(json);
}
function InternalServerErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function InternalServerErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
    };
}

exports.InternalServerErrorFromJSON = InternalServerErrorFromJSON;
exports.InternalServerErrorFromJSONTyped = InternalServerErrorFromJSONTyped;
exports.InternalServerErrorToJSON = InternalServerErrorToJSON;
