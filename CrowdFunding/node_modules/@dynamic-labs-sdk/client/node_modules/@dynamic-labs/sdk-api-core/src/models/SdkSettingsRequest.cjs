'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var FrameworkSettings = require('./FrameworkSettings.cjs');

/* tslint:disable */
function SdkSettingsRequestFromJSON(json) {
    return SdkSettingsRequestFromJSONTyped(json);
}
function SdkSettingsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dynamicContextProps': !runtime.exists(json, 'dynamicContextProps') ? undefined : json['dynamicContextProps'],
        'dynamicWagmiSettings': !runtime.exists(json, 'dynamicWagmiSettings') ? undefined : json['dynamicWagmiSettings'],
        'frameworkSettings': !runtime.exists(json, 'frameworkSettings') ? undefined : FrameworkSettings.FrameworkSettingsFromJSON(json['frameworkSettings']),
    };
}
function SdkSettingsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dynamicContextProps': value.dynamicContextProps,
        'dynamicWagmiSettings': value.dynamicWagmiSettings,
        'frameworkSettings': FrameworkSettings.FrameworkSettingsToJSON(value.frameworkSettings),
    };
}

exports.SdkSettingsRequestFromJSON = SdkSettingsRequestFromJSON;
exports.SdkSettingsRequestFromJSONTyped = SdkSettingsRequestFromJSONTyped;
exports.SdkSettingsRequestToJSON = SdkSettingsRequestToJSON;
