'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function HCaptchaSettingsFromJSON(json) {
    return HCaptchaSettingsFromJSONTyped(json);
}
function HCaptchaSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !runtime.exists(json, 'enabled') ? undefined : json['enabled'],
        'secretKey': !runtime.exists(json, 'secretKey') ? undefined : json['secretKey'],
        'siteKey': !runtime.exists(json, 'siteKey') ? undefined : json['siteKey'],
    };
}
function HCaptchaSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'secretKey': value.secretKey,
        'siteKey': value.siteKey,
    };
}

exports.HCaptchaSettingsFromJSON = HCaptchaSettingsFromJSON;
exports.HCaptchaSettingsFromJSONTyped = HCaptchaSettingsFromJSONTyped;
exports.HCaptchaSettingsToJSON = HCaptchaSettingsToJSON;
