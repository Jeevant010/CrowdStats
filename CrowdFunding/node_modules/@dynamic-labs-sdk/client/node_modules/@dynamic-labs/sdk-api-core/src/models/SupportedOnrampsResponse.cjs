'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var OnrampConfiguration = require('./OnrampConfiguration.cjs');

/* tslint:disable */
function SupportedOnrampsResponseFromJSON(json) {
    return SupportedOnrampsResponseFromJSONTyped(json);
}
function SupportedOnrampsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'onramps': !runtime.exists(json, 'onramps') ? undefined : (json['onramps'].map(OnrampConfiguration.OnrampConfigurationFromJSON)),
    };
}
function SupportedOnrampsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'onramps': value.onramps === undefined ? undefined : (value.onramps.map(OnrampConfiguration.OnrampConfigurationToJSON)),
    };
}

exports.SupportedOnrampsResponseFromJSON = SupportedOnrampsResponseFromJSON;
exports.SupportedOnrampsResponseFromJSONTyped = SupportedOnrampsResponseFromJSONTyped;
exports.SupportedOnrampsResponseToJSON = SupportedOnrampsResponseToJSON;
