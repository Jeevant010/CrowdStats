'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function BadRequestFromJSON(json) {
    return BadRequestFromJSONTyped(json);
}
function BadRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !runtime.exists(json, 'error') ? undefined : json['error'],
    };
}
function BadRequestToJSON(value) {
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

exports.BadRequestFromJSON = BadRequestFromJSON;
exports.BadRequestFromJSONTyped = BadRequestFromJSONTyped;
exports.BadRequestToJSON = BadRequestToJSON;
