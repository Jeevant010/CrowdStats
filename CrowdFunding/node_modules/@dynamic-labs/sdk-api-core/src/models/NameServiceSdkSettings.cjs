'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var NameServiceSdkSettingsEvm = require('./NameServiceSdkSettingsEvm.cjs');

/* tslint:disable */
function NameServiceSdkSettingsFromJSON(json) {
    return NameServiceSdkSettingsFromJSONTyped(json);
}
function NameServiceSdkSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'evm': NameServiceSdkSettingsEvm.NameServiceSdkSettingsEvmFromJSON(json['evm']),
    };
}
function NameServiceSdkSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'evm': NameServiceSdkSettingsEvm.NameServiceSdkSettingsEvmToJSON(value.evm),
    };
}

exports.NameServiceSdkSettingsFromJSON = NameServiceSdkSettingsFromJSON;
exports.NameServiceSdkSettingsFromJSONTyped = NameServiceSdkSettingsFromJSONTyped;
exports.NameServiceSdkSettingsToJSON = NameServiceSdkSettingsToJSON;
