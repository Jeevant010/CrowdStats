'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function NameServiceSdkSettingsEvmFromJSON(json) {
    return NameServiceSdkSettingsEvmFromJSONTyped(json);
}
function NameServiceSdkSettingsEvmFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'domain': !runtime.exists(json, 'domain') ? undefined : json['domain'],
    };
}
function NameServiceSdkSettingsEvmToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'domain': value.domain,
    };
}

exports.NameServiceSdkSettingsEvmFromJSON = NameServiceSdkSettingsEvmFromJSON;
exports.NameServiceSdkSettingsEvmFromJSONTyped = NameServiceSdkSettingsEvmFromJSONTyped;
exports.NameServiceSdkSettingsEvmToJSON = NameServiceSdkSettingsEvmToJSON;
