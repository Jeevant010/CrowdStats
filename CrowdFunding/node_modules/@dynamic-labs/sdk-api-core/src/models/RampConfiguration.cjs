'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function RampConfigurationFromJSON(json) {
    return RampConfigurationFromJSONTyped(json);
}
function RampConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'name': json['name'],
        'iconUrl': json['iconUrl'],
        'url': json['url'],
    };
}
function RampConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
        'name': value.name,
        'iconUrl': value.iconUrl,
        'url': value.url,
    };
}

exports.RampConfigurationFromJSON = RampConfigurationFromJSON;
exports.RampConfigurationFromJSONTyped = RampConfigurationFromJSONTyped;
exports.RampConfigurationToJSON = RampConfigurationToJSON;
