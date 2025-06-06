'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function MobileSettingsFromJSON(json) {
    return MobileSettingsFromJSONTyped(json);
}
function MobileSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deeplinkUrlsEnabled': !runtime.exists(json, 'deeplinkUrlsEnabled') ? undefined : json['deeplinkUrlsEnabled'],
    };
}
function MobileSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deeplinkUrlsEnabled': value.deeplinkUrlsEnabled,
    };
}

exports.MobileSettingsFromJSON = MobileSettingsFromJSON;
exports.MobileSettingsFromJSONTyped = MobileSettingsFromJSONTyped;
exports.MobileSettingsToJSON = MobileSettingsToJSON;
