'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function OnrampConfigurationFromJSON(json) {
    return OnrampConfigurationFromJSONTyped(json);
}
function OnrampConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': !runtime.exists(json, 'provider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'iconUrl': !runtime.exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'url': !runtime.exists(json, 'url') ? undefined : json['url'],
    };
}
function OnrampConfigurationToJSON(value) {
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

exports.OnrampConfigurationFromJSON = OnrampConfigurationFromJSON;
exports.OnrampConfigurationFromJSONTyped = OnrampConfigurationFromJSONTyped;
exports.OnrampConfigurationToJSON = OnrampConfigurationToJSON;
