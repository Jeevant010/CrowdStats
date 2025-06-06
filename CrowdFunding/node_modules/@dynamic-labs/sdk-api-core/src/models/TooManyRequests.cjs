'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function TooManyRequestsFromJSON(json) {
    return TooManyRequestsFromJSONTyped(json);
}
function TooManyRequestsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function TooManyRequestsToJSON(value) {
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

exports.TooManyRequestsFromJSON = TooManyRequestsFromJSON;
exports.TooManyRequestsFromJSONTyped = TooManyRequestsFromJSONTyped;
exports.TooManyRequestsToJSON = TooManyRequestsToJSON;
