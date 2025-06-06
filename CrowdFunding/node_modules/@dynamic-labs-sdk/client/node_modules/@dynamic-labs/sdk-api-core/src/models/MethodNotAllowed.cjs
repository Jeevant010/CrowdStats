'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function MethodNotAllowedFromJSON(json) {
    return MethodNotAllowedFromJSONTyped(json);
}
function MethodNotAllowedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function MethodNotAllowedToJSON(value) {
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

exports.MethodNotAllowedFromJSON = MethodNotAllowedFromJSON;
exports.MethodNotAllowedFromJSONTyped = MethodNotAllowedFromJSONTyped;
exports.MethodNotAllowedToJSON = MethodNotAllowedToJSON;
