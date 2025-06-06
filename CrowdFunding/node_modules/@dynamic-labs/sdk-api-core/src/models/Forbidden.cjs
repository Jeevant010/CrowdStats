'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ForbiddenFromJSON(json) {
    return ForbiddenFromJSONTyped(json);
}
function ForbiddenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function ForbiddenToJSON(value) {
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

exports.ForbiddenFromJSON = ForbiddenFromJSON;
exports.ForbiddenFromJSONTyped = ForbiddenFromJSONTyped;
exports.ForbiddenToJSON = ForbiddenToJSON;
