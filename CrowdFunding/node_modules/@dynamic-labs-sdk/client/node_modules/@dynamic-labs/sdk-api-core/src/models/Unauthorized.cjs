'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function UnauthorizedFromJSON(json) {
    return UnauthorizedFromJSONTyped(json);
}
function UnauthorizedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function UnauthorizedToJSON(value) {
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

exports.UnauthorizedFromJSON = UnauthorizedFromJSON;
exports.UnauthorizedFromJSONTyped = UnauthorizedFromJSONTyped;
exports.UnauthorizedToJSON = UnauthorizedToJSON;
