'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var UserFieldsCheckEnum = require('./UserFieldsCheckEnum.cjs');

/* tslint:disable */
function UserFieldsCheckParamsFromJSON(json) {
    return UserFieldsCheckParamsFromJSONTyped(json);
}
function UserFieldsCheckParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'field': UserFieldsCheckEnum.UserFieldsCheckEnumFromJSON(json['field']),
        'value': json['value'],
    };
}
function UserFieldsCheckParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'field': UserFieldsCheckEnum.UserFieldsCheckEnumToJSON(value.field),
        'value': value.value,
    };
}

exports.UserFieldsCheckParamsFromJSON = UserFieldsCheckParamsFromJSON;
exports.UserFieldsCheckParamsFromJSONTyped = UserFieldsCheckParamsFromJSONTyped;
exports.UserFieldsCheckParamsToJSON = UserFieldsCheckParamsToJSON;
