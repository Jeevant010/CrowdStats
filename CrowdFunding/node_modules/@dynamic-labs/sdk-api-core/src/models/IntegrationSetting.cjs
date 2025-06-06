'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function IntegrationSettingFromJSON(json) {
    return IntegrationSettingFromJSONTyped(json);
}
function IntegrationSettingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'required': !runtime.exists(json, 'required') ? undefined : json['required'],
        'enabled': json['enabled'],
    };
}
function IntegrationSettingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'required': value.required,
        'enabled': value.enabled,
    };
}

exports.IntegrationSettingFromJSON = IntegrationSettingFromJSON;
exports.IntegrationSettingFromJSONTyped = IntegrationSettingFromJSONTyped;
exports.IntegrationSettingToJSON = IntegrationSettingToJSON;
