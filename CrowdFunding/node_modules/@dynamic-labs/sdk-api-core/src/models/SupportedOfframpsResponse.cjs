'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var RampConfiguration = require('./RampConfiguration.cjs');

/* tslint:disable */
function SupportedOfframpsResponseFromJSON(json) {
    return SupportedOfframpsResponseFromJSONTyped(json);
}
function SupportedOfframpsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'offramps': !runtime.exists(json, 'offramps') ? undefined : (json['offramps'].map(RampConfiguration.RampConfigurationFromJSON)),
    };
}
function SupportedOfframpsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'offramps': value.offramps === undefined ? undefined : (value.offramps.map(RampConfiguration.RampConfigurationToJSON)),
    };
}

exports.SupportedOfframpsResponseFromJSON = SupportedOfframpsResponseFromJSON;
exports.SupportedOfframpsResponseFromJSONTyped = SupportedOfframpsResponseFromJSONTyped;
exports.SupportedOfframpsResponseToJSON = SupportedOfframpsResponseToJSON;
