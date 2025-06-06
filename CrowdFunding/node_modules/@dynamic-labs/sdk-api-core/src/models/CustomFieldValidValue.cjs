'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function CustomFieldValidValueFromJSON(json) {
    return CustomFieldValidValueFromJSONTyped(json);
}
function CustomFieldValidValueFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'label': json['label'],
        'key': !runtime.exists(json, 'key') ? undefined : json['key'],
    };
}
function CustomFieldValidValueToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'label': value.label,
        'key': value.key,
    };
}

exports.CustomFieldValidValueFromJSON = CustomFieldValidValueFromJSON;
exports.CustomFieldValidValueFromJSONTyped = CustomFieldValidValueFromJSONTyped;
exports.CustomFieldValidValueToJSON = CustomFieldValidValueToJSON;
