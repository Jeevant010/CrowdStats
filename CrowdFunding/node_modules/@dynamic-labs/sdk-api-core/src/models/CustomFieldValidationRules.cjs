'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CustomFieldValidValue = require('./CustomFieldValidValue.cjs');

/* tslint:disable */
function CustomFieldValidationRulesFromJSON(json) {
    return CustomFieldValidationRulesFromJSONTyped(json);
}
function CustomFieldValidationRulesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'unique': !runtime.exists(json, 'unique') ? undefined : json['unique'],
        'regex': !runtime.exists(json, 'regex') ? undefined : json['regex'],
        'validOptions': !runtime.exists(json, 'validOptions') ? undefined : (json['validOptions'].map(CustomFieldValidValue.CustomFieldValidValueFromJSON)),
        'checkboxText': !runtime.exists(json, 'checkboxText') ? undefined : json['checkboxText'],
    };
}
function CustomFieldValidationRulesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'unique': value.unique,
        'regex': value.regex,
        'validOptions': value.validOptions === undefined ? undefined : (value.validOptions.map(CustomFieldValidValue.CustomFieldValidValueToJSON)),
        'checkboxText': value.checkboxText,
    };
}

exports.CustomFieldValidationRulesFromJSON = CustomFieldValidationRulesFromJSON;
exports.CustomFieldValidationRulesFromJSONTyped = CustomFieldValidationRulesFromJSONTyped;
exports.CustomFieldValidationRulesToJSON = CustomFieldValidationRulesToJSON;
