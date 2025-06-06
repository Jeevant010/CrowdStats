'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var NetworkConfiguration = require('./NetworkConfiguration.cjs');

/* tslint:disable */
function NetworkConfigurationResponseFromJSON(json) {
    return NetworkConfigurationResponseFromJSONTyped(json);
}
function NetworkConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainName': !runtime.exists(json, 'chainName') ? undefined : json['chainName'],
        'networks': !runtime.exists(json, 'networks') ? undefined : (json['networks'].map(NetworkConfiguration.NetworkConfigurationFromJSON)),
    };
}
function NetworkConfigurationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainName': value.chainName,
        'networks': value.networks === undefined ? undefined : (value.networks.map(NetworkConfiguration.NetworkConfigurationToJSON)),
    };
}

exports.NetworkConfigurationResponseFromJSON = NetworkConfigurationResponseFromJSON;
exports.NetworkConfigurationResponseFromJSONTyped = NetworkConfigurationResponseFromJSONTyped;
exports.NetworkConfigurationResponseToJSON = NetworkConfigurationResponseToJSON;
