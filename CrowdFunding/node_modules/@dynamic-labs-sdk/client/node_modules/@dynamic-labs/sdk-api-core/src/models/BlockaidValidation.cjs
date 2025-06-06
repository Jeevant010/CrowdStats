'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function BlockaidValidationFromJSON(json) {
    return BlockaidValidationFromJSONTyped(json);
}
function BlockaidValidationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'description': !runtime.exists(json, 'description') ? undefined : json['description'],
        'reason': json['reason'],
        'classification': !runtime.exists(json, 'classification') ? undefined : json['classification'],
    };
}
function BlockaidValidationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'description': value.description,
        'reason': value.reason,
        'classification': value.classification,
    };
}

exports.BlockaidValidationFromJSON = BlockaidValidationFromJSON;
exports.BlockaidValidationFromJSONTyped = BlockaidValidationFromJSONTyped;
exports.BlockaidValidationToJSON = BlockaidValidationToJSON;
